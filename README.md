# Next.js & HeroUI Template

This is a template for creating applications using Next.js 14 (app directory) and HeroUI (v2).

[Try it on CodeSandbox](https://githubbox.com/heroui-inc/heroui/next-app-template)

## Technologies Used

- [Next.js 14](https://nextjs.org/docs/getting-started)
- [HeroUI v2](https://heroui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)

## How to Use

### Use the template with create-next-app

To create a new project based on this template using `create-next-app`, run the following command:

```bash
npx create-next-app -e https://github.com/heroui-inc/next-app-template
```

### Install dependencies

You can use one of them `npm`, `yarn`, `pnpm`, `bun`, Example using `npm`:

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Setup pnpm (optional)

If you are using `pnpm`, you need to add the following code to your `.npmrc` file:

```bash
public-hoist-pattern[]=*@heroui/*
```

After modifying the `.npmrc` file, you need to run `pnpm install` again to ensure that the dependencies are installed correctly.

## License

Licensed under the [MIT license](https://github.com/heroui-inc/next-app-template/blob/main/LICENSE).








malmat-website/
│
├── app/
│   ├── layout.tsx          # Root layout (metadata, Navbar, Footer, theme)
│   ├── providers.tsx       # HeroUI + next-themes provider
│   ├── page.tsx            # Homepage
│   ├── about/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
│
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ServiceCard.tsx
│   └── SEO.tsx
│
├── lib/
│   ├── site.ts             # Company config
│   ├── seo.ts              # SEO metadata helpers
│   └── utils.ts            # Helpers (cn, formatPhone, currentYear)
│
├── public/
│   ├── images/
│   │   ├── logo.png
│   │   ├── hero.jpg
│   │   └── services/
│   │       ├── mats.jpg
│   │       └── hygiene.jpg
│   └── favicon.ico
│
├── styles/
│   └── globals.css
│
├── tailwind.config.ts
├── postcss.config.mjs
├── tsconfig.json
├── package.json
└── README.md
