import CodeBlock from "../components/CustomCodeBlock"
import SourceLink from "../components/SourceLink";

export default function Tailwind() {

const responsive =
`<div class="text-center sm:text-left lg:text-right">Responsive Text Alignment</div>
`

const flex =
`<div class="flex justify-between">
<div>Item 1</div>
<div>Item 2</div>
</div>
`

const spacing =
`<div class="m-4 p-8 w-64 h-32">Box with Margin, Padding, Width, and Height</div>
`

const background =
`<div class="bg-blue-500 border-2 border-solid border-gray-800 shadow-lg">Styled Box</div>
`

const typo =
`<p class="text-xl font-bold leading-7 tracking-wide">Styled Text</p>
`

  return (
    <div className="container content">
      <h2>Tailwind CSS</h2>
      <p>Tailwind CSS is a <span className="underline underline-offset-2 font-bold">utility-first CSS framework</span> that provides <strong>low-level utility classes to build designs directly in your markup</strong>. Instead of writing custom CSS styles, you compose designs <strong>using pre-defined utility classes</strong>. Here are some key concepts and features of Tailwind CSS:</p>

      <h3>1. Utility-First Approach:</h3>
      <p>Tailwind CSS follows a <strong>utility-first approach</strong>, meaning that you apply small, atomic <strong>utility classes</strong> directly in your HTML to create designs. This approach helps in <strong>rapid development</strong> and keeps the styles predictable.</p>

      <h3>2. Installation</h3>
      <p>You can install Tailwind CSS <strong>using npm or yarn</strong>. After installation, you need to create a configuration file (usually named <strong>tailwind.config.js</strong>) where you can customize various aspects of the framework.</p>

      <h3>3. Responsive Design:</h3>
      <p>Tailwind makes it easy to create responsive designs by providing classes that apply <strong>styles based on screen size breakpoints</strong>. For example, you can use classes like <strong>sm, md, lg, and xl</strong> to apply styles for small, medium, large, and extra-large screens, respectively.</p>
      <CodeBlock code={responsive} language={"html"} />

      <h3>4. Flexbox and Grid</h3>
      <p>Tailwind includes utility classes for <strong>Flexbox and CSS Grid</strong> to create layout structures without writing custom CSS.</p>
      <CodeBlock code={flex} language={"html"} />

      <h3>5. Spacing and Sizing</h3>
      <p>Classes like <strong>m, p, w, and h</strong> help control <strong>margin, padding, width, and height</strong>, respectively. You can use predefined spacing and sizing values or customize them in the configuration file.</p>
      <CodeBlock code={spacing} language={"html"} />

      <h3>6. Backgrounds, Borders, and Shadows</h3>
      <p>Tailwind provides utility classes for setting <strong>background colors, borders, and shadows</strong>, making it easy to style elements without writing custom styles.</p>
      <CodeBlock code={background} language={"html"} />

      <h3>7. Text and Typography</h3>
      <p>Classes like <strong>text, font, leading, and tracking</strong> allow you to control text styles and typography in a straightforward manner.</p>
      <CodeBlock code={typo} language={"html"} />

      <h3>8. Extensibility</h3>
      <p>Tailwind CSS is designed to be <strong>highly customizable</strong>. You can extend or override existing utility classes, add new ones, and configure various aspects of the framework to suit your project's needs.</p>

      <h3>9. Plugins</h3>
      <p>Tailwind allows the use of plugins to extend its functionality. This can include <strong>additional utility classes, components, or tools that integrate with the Tailwind ecosystem</strong>.</p>

      <h3>10. JIT (Just-In-Time) Mode</h3>
      <p>Tailwind CSS introduced JIT mode, which allows for <strong>faster build times by compiling the styles on-demand</strong>. This is particularly <strong>useful for large projects</strong>.</p>

      <p>Tailwind CSS is popular for its simplicity, rapid development capabilities, and flexibility. It's well-suited for both small and large projects, and its utility-first approach can lead to more maintainable and predictable stylesheets.</p>

      <div className="sources bg-dark-300 rounded-lg p-4 mt-10">
        <h4>Sources</h4>
        <SourceLink name={"Stack Overflow"} link={"https://stackoverflow.com/"} />
        <SourceLink name={"Oficial Tailwind CSS Documentation"} link={"https://tailwindcss.com/docs/installation/"} />
        <SourceLink name={"Chat GPT"} link={"https://chat.openai.com/"} />
      </div>
    </div>
  )
}
