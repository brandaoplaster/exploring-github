import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';

interface Repository{
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepository] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs')
    .then(response => response.json())
    .then(data => setRepository(data))
  }, []);

  return (
    <section className="repository-list">
      <h1>List Repositories</h1>
      <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository} />
        })}
      </ul>
    </section>
  )
}
