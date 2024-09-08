import { references } from '../data'

export function ReferencesMap() {
  return (
    <div className="container mx-auto">
      <ul className="space-y-6">
        {references.map((item, index) => (
          <li
            key={index}
            className="rounded-lg border border-gray-200 bg-white p-6 text-sm shadow-md lg:text-base"
          >
            <h3 className="mb-2 text-base font-bold text-cyan-800 lg:text-xl">
              &quot;{item.title}&quot;
            </h3>
            <p className="mb-2 text-stone-600">
              <strong>Autor:</strong> {item.author}
            </p>
            <p className="mb-4 text-stone-600">
              <strong className={`${!item.publisher && 'hidden'}`}>
                Editora:
              </strong>{' '}
              {item.publisher} <strong>Ano:</strong> {item.year}
            </p>
            <p className="text-stone-700">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
