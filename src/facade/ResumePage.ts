import { ResumeImporter } from "../importer/ResumeImporter";

/**
 * Фасад: єдина точка входу.
 */

export class ResumePage {
  async init(jsonPath: string): Promise<void> {
    const rawData = await this.fetchData(jsonPath);
    const importer = new ResumeImporter(rawData);
    importer.validate();
    const model = importer.map();
    importer.render(model);
  }

  private async fetchData(path: string): Promise<unknown> {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`Failed to load JSON: ${response.statusText}`);
    }
    return response.json();
  }
}