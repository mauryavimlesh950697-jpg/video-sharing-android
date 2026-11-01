export const PROJECT_KEY = 'creatorcut-ai-project-v1';

export function saveProjectData(value: unknown) {
  try {
    localStorage.setItem(PROJECT_KEY, JSON.stringify(value));
    return true;
  } catch (error) {
    console.warn('Failed to save project to localStorage', error);
    return false;
  }
}

export function loadProjectData<T>(): T | null {
  try {
    const raw = localStorage.getItem(PROJECT_KEY);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch (error) {
    console.warn('Failed to read project from localStorage', error);
    return null;
  }
}
