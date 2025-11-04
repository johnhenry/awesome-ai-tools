#!/usr/bin/env python3
"""
Analyze webpage content and extract information for adding to awesome-ai-tools readme.

This script fetches webpage content, extracts metadata, and returns structured information
that can be used to create properly formatted entries in the readme.
"""

import sys
import json
import re
from urllib.parse import urlparse
from typing import Dict, List, Optional

try:
    import requests
    from bs4 import BeautifulSoup
except ImportError:
    print("Error: Required packages not installed.")
    print("Please run: pip install requests beautifulsoup4")
    sys.exit(1)


def extract_github_info(url: str, soup: BeautifulSoup) -> Dict:
    """Extract information specific to GitHub repositories."""
    info = {}

    # Extract repository name and owner from URL
    parts = urlparse(url).path.strip('/').split('/')
    if len(parts) >= 2:
        info['owner'] = parts[0]
        info['repo_name'] = parts[1]

    # Extract description (usually in meta tag or on page)
    meta_desc = soup.find('meta', attrs={'name': 'description'})
    if meta_desc:
        info['description'] = meta_desc.get('content', '').strip()

    # Try to find README content or about section
    about = soup.find('p', class_='f4')  # GitHub repo about section
    if about:
        info['about'] = about.get_text(strip=True)

    return info


def extract_webpage_info(url: str) -> Dict:
    """
    Fetch webpage and extract relevant information.

    Returns a dictionary with extracted information including:
    - title
    - description
    - key features (if found)
    - metadata (og tags, etc.)
    """
    try:
        # Fetch the webpage
        headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
        }
        response = requests.get(url, headers=headers, timeout=10)
        response.raise_for_status()

        # Parse HTML
        soup = BeautifulSoup(response.text, 'html.parser')

        info = {
            'url': url,
            'success': True
        }

        # Extract title
        title = soup.find('title')
        if title:
            info['title'] = title.get_text(strip=True)

        # Extract meta description
        meta_desc = soup.find('meta', attrs={'name': 'description'})
        if not meta_desc:
            meta_desc = soup.find('meta', attrs={'property': 'og:description'})
        if meta_desc:
            info['description'] = meta_desc.get('content', '').strip()

        # Extract Open Graph metadata
        og_title = soup.find('meta', attrs={'property': 'og:title'})
        if og_title:
            info['og_title'] = og_title.get('content', '').strip()

        og_type = soup.find('meta', attrs={'property': 'og:type'})
        if og_type:
            info['og_type'] = og_type.get('content', '').strip()

        # Check if it's a GitHub repository
        if 'github.com' in url:
            github_info = extract_github_info(url, soup)
            info.update(github_info)
            info['is_github'] = True

        # Extract keywords if available
        keywords = soup.find('meta', attrs={'name': 'keywords'})
        if keywords:
            info['keywords'] = keywords.get('content', '').strip()

        # Try to find main headings
        h1_tags = soup.find_all('h1', limit=3)
        if h1_tags:
            info['headings'] = [h1.get_text(strip=True) for h1 in h1_tags]

        # Extract first few paragraphs
        paragraphs = soup.find_all('p', limit=5)
        if paragraphs:
            info['paragraphs'] = [p.get_text(strip=True) for p in paragraphs if p.get_text(strip=True)]

        return info

    except requests.RequestException as e:
        return {
            'url': url,
            'success': False,
            'error': f'Failed to fetch URL: {str(e)}'
        }
    except Exception as e:
        return {
            'url': url,
            'success': False,
            'error': f'Error processing webpage: {str(e)}'
        }


def main():
    """Main entry point for the script."""
    if len(sys.argv) < 2:
        print("Usage: python3 analyze_and_add.py <url> [additional_urls...]")
        print("\nExample:")
        print("  python3 analyze_and_add.py https://github.com/example/tool")
        sys.exit(1)

    urls = sys.argv[1:]
    results = []

    print(f"Analyzing {len(urls)} URL(s)...\n")

    for url in urls:
        print(f"Fetching: {url}")
        info = extract_webpage_info(url)
        results.append(info)

        if info.get('success'):
            print(f"  ✓ Successfully extracted information")
        else:
            print(f"  ✗ Error: {info.get('error', 'Unknown error')}")
        print()

    # Output results as JSON
    print("\n" + "="*80)
    print("EXTRACTED INFORMATION")
    print("="*80)
    print(json.dumps(results, indent=2, ensure_ascii=False))

    # Return success if at least one URL was processed successfully
    if any(r.get('success') for r in results):
        sys.exit(0)
    else:
        sys.exit(1)


if __name__ == '__main__':
    main()
