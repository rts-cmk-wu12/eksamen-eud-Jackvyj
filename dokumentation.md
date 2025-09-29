# Opgavetitel: eksamen-eud

Peter W L, WU12

Valgfri opgave: C - Opret bruger

## Sådan kommer du i gang

front-end

`cd projekt`

`npm install`

`npm run dev`

back-end

`cd api`

`npm install`

`npm run dev`

## Tech-stack

- **React**
  React er et meget populært javascript bibliotek, der gør det nemmere at lave front-end via javascript og HTML. Koden er baseret på komponenter, der gør den nem at dele op. Da det er et populært bibliotek er der også lavet mange moduler og frameworks til React.
- **Next.js**  
  Next.js er et front-end framework der er baseret på React og bygger videre på den med nye funktioner. Fx gør Next.js det muligt at bruge server-side rendering, samt mappebaseret routing, som jeg fx har brugt i mit projekt.
- **Git**
  Git er et værktøj som lader mig lave branches, hvor jeg kan gemme min kode. Så kan jeg bruge den gemte kode, så hvis nu jeg kommer til at slette det, så kan jeg få koden tilbage hvor jeg sidst gemte ved hjælp af GitHub.
- **Tailwind**  
  Tailwindcss er lidt som css, men bare hvor man kan skrive css'en lige ind i koden. Det bygger videre på css.
- **React-icons**  
  React-icons er et bibliotek af ikoner som man kan bruge til at få sin hjemmeside til at se bedre ud.

## Kode-eksempel

Listing item (components/listing.js)

```jsx
import Image from "next/image";
import Link from "next/link";

export default function Listing({ item }) {
  const title = item.title;
  const imageUrl = item.asset.url;

  return (
    <Link
      href={`/details/${item.id}`}
      key={item.id}
      className="border-1 rounded-sm justify-items-center items-center w-76 h-76"
    >
      <Image
        className="p-2 w-auto h-5/6"
        src={imageUrl}
        alt=""
        width={150}
        height={150}
      />
      <div>{title}</div>
    </Link>
  );
}
```

I mit listing komponent starter jeg med at tage item som input. Item er i dette tilfælde en bytteting. Jeg har lavet et link til detaljesiden, så når man klikker på komponentet, så navigerer man hen til den byttetings detail side via byttetingets id (item.id). Inde under linket har jeg sat et billede, hvor src er sat til byttetingets url (item.asset.url). Under billedet har jeg skrevet titlen på byttetingen, hvilket kommer fra item.title.

Jeg bruger dette komponent på to sider. Det bliver brugt i et grid på forsiden og under "andre ting fra samme swapper" på details siden.
