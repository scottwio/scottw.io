export class ProjectsModel {
  items: ProjectModel[] = [];
}

export class ProjectModel {
  title: string;
  icons: ProjectIconModel[] = [];
  uri: string; 
}

class ProjectIconModel {
  name: string;
  key: string;
  id: number;
}
