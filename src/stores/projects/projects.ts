import * as projectsData from './projects.json'

import type { ProjectModel, ProjectRevisionModel } from './project-model';

import { ref } from 'vue'

const projects = ref<ProjectModel[] | null>(projectsData.default as ProjectModel[]);
const currentProject = ref<ProjectModel | null>(null);
const currentProjectRevisionIndex = ref<number | null>(null);
const currentProjectRevision = ref<ProjectRevisionModel | null>(null);

export function useProjects() {
  return {
    projects,
    currentProject,
    currentProjectRevisionIndex,
    currentProjectRevision,
    setCurrentProject,
    clearCurrentProject
  }
}

function setCurrentProject(projectId: string): void {
  if(projects.value) {
    const project = projects.value.find((project) => project.id === projectId);

    if(project) {
      currentProject.value = project || null;
      currentProjectRevisionIndex.value = 0;
      currentProjectRevision.value = project?.revisions[0] || null;
    } else {
      clearCurrentProject();
    }
  }
}

function clearCurrentProject(): void {
  currentProject.value = null;
  currentProjectRevisionIndex.value = null;
  currentProjectRevision.value = null;
}
