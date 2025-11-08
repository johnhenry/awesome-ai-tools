export interface Tool {
  name: string;
  website?: string;
  aiWebsite?: string;
  repository?: string;
  documentation?: string;
  apiConsole?: string;
  apiPlatform?: string;
  aiStudio?: string;
  description?: string;
  models?: string;
  pricing?: string;
  specialFeatures?: string;
}

export interface Subcategory {
  id: string;
  name: string;
  tools?: Tool[];
}

export interface Category {
  id: string;
  name: string;
  description?: string;
  tools?: Tool[];
  subcategories?: Subcategory[];
}

export interface Meta {
  title: string;
  subtitle: string;
  lastUpdated: string;
  introduction: {
    overview: string;
    purpose: string[];
    contributing: string;
  };
}

export interface ToolsData {
  meta: Meta;
  categories: Category[];
}
