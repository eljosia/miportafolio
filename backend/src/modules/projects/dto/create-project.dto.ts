export class CreateProjectDto {
  title: string
  description?: string
  image?: string
  githubUrl?: string
  demoUrl?: string
  featured?: boolean
  order?: number

  skillIds?: number[]
}
