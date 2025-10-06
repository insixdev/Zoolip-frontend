import { Navbar } from "@/components/layout";
import LightBackground from "@/components/layout/background/LightBackground";
import BlurText from "@/components/ui/Texts/BlurText";
import FlowingMenu from "@/components/ui/FlowingMenu";
import GradientText from "@/components/ui/Texts/GradientText";
import AnimatedContent from "@/components/ui/button/AnimatedContent";
import Button from "@/components/ui/button/Button";
import ScrollReveal from "@/components/ui/Texts/ScrollReveal";

export function Root() {

  const demoItems = [
    { link: '/comunidad', text: 'Comunidad', image: 'https://picsum.photos/600/400?random=1' },
    { link: '/adoptar', text: 'Sucias', image: 'https://picsum.photos/600/400?random=2' },
    { link: '/about', text: 'Acerca', image: 'https://picsum.photos/600/400?random=3' },
  ];


  return ( 


<>
  {/* Navbar fijo */}
      <Navbar className="absolute z-10"/>
  {/* Hero con fondo de LightBackground */}
  <div className="relative w-full min-h-screen overflow-visible pt-20"> 

    {/* pt-20 para que el Navbar no tape el contenido */}
    <LightBackground
      lightSpread={1.5}
      raysColor="#deb597"
      noiseAmount={0.05}
      rayLength={4}
      fadeDistance={1.6}
      distortion={0.02}
      className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
    />

    <div className="relative  ml-16 pt-32 pb-16 md:px-4 lg:px-4 xl:px-4 flex flex-col items-start ">
      {/* Título */}
      <GradientText
        colors={["#ffffaa", "#ffaa40", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={7}
        showBorder={true}
        className="text-7xl font-bold"
      >
        Zoolip
      </GradientText>

      {/* Subtítulo animado */}
      <BlurText
        text="Una solución que salva vidas."
        delay={150}
        animateBy="words"
        direction="top"
            className="text-7xl font-medium mt-2"
          />
          <p className="text-3xl mt-4"> Nuestra app conecta rescatistas, veterinarias y familias </p>
          <p className="text-3xl"> para transformar el futuro de cada perro </p>
          {/* Botón principal */}
          <AnimatedContent
        distance={150}
        direction="horizontal"
        duration={1.2}
        animateOpacity
        className="mt-6"
      >

        <Button size="md" variant="especial" className="z-20">Salva perras</Button>
      </AnimatedContent>

    </div>

  </div>

  {/* Secciones normales scrollable */}
  <div className="px-16 py-16">
    {/* FlowingMenu */}
    <div className="pt-32 w-full">
      <FlowingMenu items={demoItems} />
    </div>

    {/* Contenido adicional */}
    <p className="text-6xl mt-32">
      lorerlkjsllfdkfjsaldkfjlkñasdfjñlsajdfk
    </p>

    <section>
      <ScrollReveal
        baseOpacity={0}
        enableBlur
        baseRotation={5}
        blurStrength={10}
        containerClassName="mt-12 mb-32"
      >
        When does a man die? When he is hit by a bullet? No! When he suffers a disease?
        No! When he ate a soup made out of a poisonous mushroom?
        No! A man dies when he is forgotten!
      </ScrollReveal>
    </section>
  </div>
</>

  );
}
