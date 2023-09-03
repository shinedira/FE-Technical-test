export interface Components {
  name: string;
  component_name: string;
  model: Slider | BaseModel;
}

export interface Slider {
  dataSlider: BaseModel[];
}

export interface BaseModel {
  id?: string;
  title?: string;
  description?: string;
  link?: Link;
  featured?: Featured;
  featured_hover?: Featured;
  title_one?: string;
  title_two?: string;
  dataSlider?: BaseModel[];
}

export interface Featured {
  id: string;
  created_at: string;
  updated_at: string;
  updatedBy?: string | null;
  title: string | null;
  description: string | null;
  size: number;
  type: string;
  original: string;
  path: string;
  is_aws: boolean;
  aws_file_url: string;
  filename: Filename;
}

interface Filename {
  big: string;
  raw: string;
  blur: string;
  medium: string;
}

interface Link {
  title: string;
  url: string;
  attach?: string;
}
