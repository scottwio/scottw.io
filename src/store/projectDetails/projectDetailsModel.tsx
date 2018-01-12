export class ProjectDetailsModel {
  uri: string;
  heroImage: ProjectDetailsHero;
  title: string;
  description: string;
  link: ProjectDetailsLink;
  links: ProjectDetailsLinks[];
  images: ProjectDetailsImage[];
  icons: ProjectDetailsIcon[];
  moreWork: ProjectDetailsMoreWork[];
}

class ProjectDetailsLink {
  text: string;
  url: string;
}

class ProjectDetailsImage {
  type: string;
  url: string;
}

class ProjectDetailsHero {
positionX: string;
url: string;
}

class ProjectDetailsIcon {
  name: string;
  id: number;
  key: string;
}

class ProjectDetailsMoreWork {
  text: string;
  uri: string;
}

class ProjectDetailsLinks {
  title: string;
  items: ProjectDetailsLink[];
}