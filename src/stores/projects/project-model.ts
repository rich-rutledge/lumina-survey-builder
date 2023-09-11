export interface ProjectModel {
  readonly id: string,
  readonly revisions: ProjectRevisionModel[];
}

export interface ProjectRevisionModel {
  readonly name: string;
}
