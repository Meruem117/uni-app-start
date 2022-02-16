export interface workItem {
  id: number,
  title: string,
  description: string,
  time: string,
}

export interface activityItem {
  id: number,
  title: string,
  type: string,
  status: number,
  startTime: string,
  endTime: string,
  location: string,
  total: number,
  restrict: number,
  content: string,
  images: string[]
}

export interface contactItem {
  id: number,
  name: string,
  service: string,
  tels: string[],
  location: string
}

export interface collectionItem {
  id: number,
  title: string,
  time: string,
  image: string
}

export interface peopleItem {
  id: number,
  name: string,
  description: string,
  job: string,
  title: string,
  images: string[],
  video: string
}