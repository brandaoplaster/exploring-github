export function RepositoryItem() {
  return (
    <li>
      <strong>
        {props.reposiotry.name}
      </strong>
      <p>
        {props.reposiotry.description}
      </p>
      <a href={props.reposiotry.html_url}>Access repository</a>
    </li>
  )
}
