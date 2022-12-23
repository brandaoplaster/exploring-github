import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>List Repositories</h1>
      <ul>
        <RepositoryItem />
      </ul>
    </section>
  )
}
