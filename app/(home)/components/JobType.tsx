"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import Autoplay from "embla-carousel-autoplay"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Skeleton } from "@/components/ui/skeleton"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"

const jobTypesArr = [
  { label: "Remote", icon: "/jobtype-icons/remote-job.svg" },
  { label: "MNC", icon: "/jobtype-icons/mnc.svg" },
  {
    label: "Project Mgmt.",
    icon: "/jobtype-icons/project-management.svg",
  },
  { label: "HR", icon: "/jobtype-icons/hr.svg" },
  { label: "Supply Chain", icon: "/jobtype-icons/sales.svg" },
  { label: "Fresher", icon: "/jobtype-icons/freshers.svg" },
  { label: "Internship", icon: "/jobtype-icons/sales.svg" },
  { label: "Data Science", icon: "/jobtype-icons/data-science.svg" },
  { label: "Sales", icon: "/jobtype-icons/sales.svg" },
  { label: "Marketing", icon: "/jobtype-icons/remote-job.svg" },
  { label: "Fortune 500", icon: "/jobtype-icons/fortune.svg" },
]

const JobType: React.FC = () => {
  const [api, setApi] = useState<CarouselApi | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const { theme } = useTheme()

  console.log(setLoading)

  useEffect(() => {
    if (!api) return
  }, [api])

  const handleNextClick = () => {
    if (api) api.scrollNext()
  }

  const handlePrevClick = () => {
    if (api) api.scrollPrev()
  }

  return (
    <section className="bg-transparent dark:bg-[#323b4c]">
      <MaxWidthWrapper>
        <Carousel
          opts={{ loop: true }}
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full flex justify-between items-center"
        >
          <div className="h-6 w-6">
            <Button
              onClick={handlePrevClick}
              variant="outline"
              size="icon"
              className="h-6 w-6 rounded-full"
            >
              <ChevronLeftIcon className="h-4 w-4" />
            </Button>
          </div>

          <CarouselContent className="flex">
            {loading
              ? Array.from({ length: 8 }).map((_, index) => (
                  <Skeleton key={index} className="w-[180px] h-[60px] mx-2" />
                ))
              : jobTypesArr.map((type, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-1/2 md:basis-1/6 lg:basis-1/8"
                  >
                    <Link
                      href="#"
                      className={cn(
                        "w-full h-full flex justify-between items-center border rounded-sm p-2",
                        theme === "dark"
                          ? "border-gray-800 bg-gray-800 text-white hover:bg-gray-700"
                          : "bg-white text-gray-900 hover:bg-gray-100"
                      )}
                    >
                      <div className="size-10 flex justify-center items-center h-auto">
                        <img
                          className="size-8 md:size-10 mr-1"
                          src={type.icon}
                          style={{ aspectRatio: "3/2" }}
                          alt={`${type.label} image`}
                          loading="lazy"
                        />
                      </div>
                      <h3 className="text-sm font-medium max-w-sm truncate">
                        {type.label}
                      </h3>
                      <ChevronRightIcon className="size-4 text-slate-400" />
                    </Link>
                  </CarouselItem>
                ))}
          </CarouselContent>

          <div className="h-6 w-6">
            <Button
              onClick={handleNextClick}
              variant="outline"
              size="icon"
              className="h-6 w-6 rounded-full"
            >
              <ChevronRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </Carousel>
      </MaxWidthWrapper>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        nesciunt exercitationem animi minus quos iusto cupiditate hic recusandae
        ea neque debitis porro eligendi, quaerat labore eum ipsa quas optio.
        Totam, dolore, laudantium voluptatum nulla at quo inventore dolorum nam,
        eum autem delectus cumque! Sint porro nemo rerum iste odit quaerat
        voluptate blanditiis dolorem? Nisi, pariatur voluptatem nam optio nobis
        delectus numquam quia explicabo placeat veritatis nihil ipsa doloribus
        dolorum commodi nemo corporis rerum. Aliquid a nesciunt omnis! Laborum
        ullam esse nemo, voluptatem odio consequuntur veniam tenetur possimus,
        corrupti maiores repellat accusantium a illo! Dolorem iste voluptates
        quo ea debitis natus laudantium numquam optio ad quae. Provident
        nesciunt culpa nulla, voluptatum voluptas veritatis, reiciendis
        quibusdam illum cumque pariatur maiores aut odit, sunt deleniti magni
        voluptates neque eos consequatur itaque iusto? Dolorem quam nesciunt
        placeat delectus consectetur sed enim quaerat quo accusamus itaque
        repellat nam aut nobis non ipsum, temporibus illo ad earum eos excepturi
        porro neque animi voluptate. Quis nostrum labore, porro sunt dolor
        necessitatibus! Libero voluptatum, labore minus dolorem consequatur
        corporis animi possimus laudantium nemo tempore nesciunt, odit delectus
        nobis harum repellat? Veniam illum hic exercitationem, optio aliquam
        minima voluptatum totam voluptates, nostrum commodi esse modi? Quod fuga
        totam tempore dolores amet maxime error ullam explicabo deleniti nihil
        pariatur, voluptatum veniam excepturi libero, modi earum recusandae.
        Alias in dignissimos eveniet aperiam tenetur ab. Voluptas sed expedita
        vel fugiat earum qui nemo, exercitationem aliquid dolores deserunt.
        Necessitatibus similique excepturi culpa rerum veniam animi, adipisci
        voluptates error in voluptatem nobis beatae ea. Quia iste natus
        aspernatur labore rerum. Tenetur incidunt maxime earum eligendi optio
        quod possimus et? Et iusto voluptatum mollitia ad! Quasi assumenda
        eveniet rerum aliquid, autem sit suscipit iste nemo debitis ipsa
        reiciendis delectus? Nihil distinctio laudantium ipsa totam consequatur
        non molestias rem deleniti atque? Iure quae in ad provident
        perspiciatis, illum nihil optio itaque, fugiat porro, quidem mollitia
        quisquam nam assumenda? Reprehenderit magni perferendis exercitationem
        iusto ullam maxime! Enim cupiditate labore magnam laboriosam dolor ipsa
        sunt accusamus officia est, a delectus ipsum accusantium veritatis
        natus. Id molestias illum totam culpa ullam facere assumenda delectus
        minus rerum eum magni magnam, consequatur vel incidunt, harum quasi
        tenetur, maiores nostrum voluptate sint reiciendis suscipit. Facere
        repellendus ex impedit consequuntur modi suscipit repellat recusandae
        totam beatae doloremque itaque dolores dignissimos, eveniet quia soluta
        amet culpa possimus quam aspernatur officiis saepe. Est fuga recusandae,
        sapiente illum delectus pariatur? Mollitia maxime maiores eveniet
        deserunt ut, quidem pariatur id itaque consectetur possimus cum ad
        accusamus eum consequatur? Dolor consequuntur illum sint, numquam
        praesentium consectetur temporibus consequatur veniam aliquid,
        voluptates inventore doloremque? Autem exercitationem culpa amet
        voluptas necessitatibus reiciendis odit quaerat labore similique id quo
        ullam excepturi vero distinctio tempore maiores minima rerum earum, sit
        magnam! Dolorem, unde, velit accusantium voluptate quod incidunt ipsum
        eligendi quisquam architecto consectetur repellat omnis, quae error illo
        a numquam itaque voluptates. Quam voluptate suscipit, sunt, illum
        exercitationem totam, vel saepe autem libero esse harum nostrum nesciunt
        ea? Voluptatibus, ab optio. Ex omnis nulla laboriosam. Tempora,
        delectus. Nulla, illum quaerat! Atque deserunt laboriosam aperiam
        aspernatur! Odit cupiditate eveniet quasi fugit, nobis tempore natus
        illum blanditiis aut, error, possimus ut aspernatur nulla deleniti. Quam
        esse magni optio at suscipit, inventore veniam animi qui veritatis eum.
        Sunt consequuntur eaque illum expedita, ut quos! Ab sed, quam suscipit
        eum aspernatur consequuntur? Nam voluptas excepturi eveniet natus
        adipisci facilis sequi rem ipsum illum assumenda id, voluptatum officiis
        ea hic et possimus repellendus aliquam veniam accusantium iste quas
        deleniti necessitatibus maxime. Autem placeat quaerat illo at
        necessitatibus deserunt possimus dignissimos doloribus dolorum, eveniet
        quasi id explicabo quia accusantium sunt commodi praesentium incidunt
        exercitationem nulla odit maiores laboriosam tenetur eum? Exercitationem
        aut omnis debitis autem pariatur molestias. Inventore officia, placeat
        excepturi voluptas amet beatae delectus autem rem voluptatem dolores
        laudantium consequatur, eos aliquam adipisci sequi molestiae! Dolores,
        adipisci optio! Excepturi quaerat itaque nulla eaque magni ex
        perferendis quam soluta quidem cum, iure inventore expedita eveniet eum
        nesciunt. Culpa ducimus vel tenetur reiciendis quia tempore quis fuga
        autem itaque saepe? Sapiente eum reiciendis porro veritatis doloribus
        assumenda repellat, mollitia corporis iure. Aliquam quibusdam expedita
        rerum delectus. Unde ipsa labore, deserunt magnam id autem iste itaque
        blanditiis explicabo dolorem mollitia dolore deleniti officiis molestiae
        cum, sit tempore, facilis corporis neque fugit at aliquam! Consequuntur
        sunt animi veniam facilis corrupti aut vitae asperiores atque officia
        veritatis voluptate quibusdam repellat quia eaque necessitatibus,
        tempora quos? Tempora reprehenderit ab ad illum nisi esse vitae, debitis
        culpa aspernatur cumque commodi repellendus ipsa dolorum odit hic
        facilis voluptates saepe. Dolor aliquam commodi facere error, cupiditate
        tempora. Debitis odit totam, maiores dolorum nulla facilis eos earum
        provident nemo voluptatem perspiciatis suscipit ab. Totam expedita,
        maiores excepturi sapiente alias, quae iste architecto quaerat, cum sit
        debitis! Nesciunt cumque itaque facilis quidem. Asperiores labore quod
        id saepe explicabo, maiores autem, nam eligendi beatae a dolor, magnam
        provident eos impedit nemo vitae! Quos, dolorum. Ex, necessitatibus
        laboriosam doloribus hic repellendus ducimus consequuntur nihil delectus
        culpa? Consequatur aspernatur, cumque velit cum repellat dolor totam, a
        nesciunt unde eius porro. Provident cum autem, voluptates iusto corrupti
        eos saepe reiciendis tenetur neque nobis excepturi necessitatibus
        aliquid hic, velit delectus rerum consequatur amet tempore eveniet
        veniam dolores, architecto non dolor voluptatibus. Corrupti animi, nobis
        magnam, illo, id ipsa eos rem quis nostrum enim quisquam facere a dicta
        ex. Id voluptatem provident incidunt a aut maxime atque fuga sapiente
        esse temporibus. Obcaecati facilis sit voluptate corporis sunt, ab natus
        enim ducimus odit quos quasi harum consectetur et sapiente minus! Minima
        eos sed corporis deleniti labore natus ex repellendus in magni deserunt!
        Delectus ipsa quis aspernatur. Eaque repudiandae impedit nesciunt
        molestias provident. Iure obcaecati inventore, vel illum provident,
        excepturi, repellendus dolores voluptatem reiciendis asperiores fuga
        delectus quam fugit expedita quidem quasi. A tenetur fugit suscipit
        aspernatur vitae. Nesciunt doloremque aliquid, unde eos nobis
        repellendus sapiente accusamus. Delectus quam ab sed, quasi beatae
        quibusdam dignissimos iure? Voluptatem, et? Asperiores quo
        necessitatibus nihil, quasi iure neque qui ea explicabo corporis? Minima
        ullam id obcaecati cumque, similique itaque, neque veritatis libero, eos
        porro unde minus labore quas pariatur. Adipisci nulla quis neque et fuga
        esse blanditiis voluptatibus nisi, ipsum, ad inventore explicabo aut
        quidem expedita? Quae quas, aliquam, obcaecati deleniti inventore rem
        dolore nemo ipsam, facilis debitis illo eaque ab accusamus distinctio
        quaerat corrupti dicta beatae consequuntur exercitationem ut accusantium
        eius iusto praesentium voluptatem. Voluptas eius dignissimos nisi ex.
        Voluptas molestias fuga explicabo expedita quibusdam dolore, ipsa
        molestiae officia nesciunt repellendus velit adipisci aliquam, corporis
        nemo voluptate numquam. Ut, quo unde et reiciendis dolores quia dolore
        odio deleniti, ducimus recusandae assumenda eius eligendi optio voluptas
        aliquam modi sed rerum impedit molestiae sunt quod. Expedita laborum, a
        voluptate debitis recusandae quo iure ad harum maiores consectetur ut
        aspernatur eveniet odit omnis eum. Quo delectus officiis nobis aliquid,
        quas temporibus. Repellendus modi recusandae, nemo sapiente, autem
        officiis beatae iste itaque aspernatur, natus sed obcaecati quasi
        nesciunt at cum harum? Omnis reiciendis dolorem vero, repellat facilis
        facere, aut magni blanditiis praesentium iure molestiae? Est autem iusto
        ea porro velit iste nihil pariatur possimus ducimus, tempora, quidem
        laboriosam provident! Excepturi iusto impedit voluptas. Iure, aliquid
        magni dolorem soluta recusandae aliquam sint non eius ratione illo
        deserunt similique minima quis accusamus nostrum ut praesentium id sed
        voluptate illum. Autem quas quia explicabo sint beatae maxime quidem
        assumenda atque. Deleniti facere, dolores iste cumque, doloribus aliquid
        vero ex saepe, delectus enim tempore harum. Nulla nihil dolore
        distinctio rem reiciendis unde voluptas quis quae, tenetur numquam, fuga
        id enim dolores illo, quam eos impedit nemo exercitationem iste possimus
        similique sint omnis consequuntur atque! Cumque incidunt eius quae
        iusto, quidem molestias atque nam enim reiciendis explicabo natus labore
        aliquid obcaecati dignissimos odit tempore, consectetur commodi quis.
        Voluptates unde vero natus magnam, quam dolores quisquam repudiandae
        delectus laudantium sed voluptas voluptate consequatur. Temporibus fugit
        aperiam et repellat obcaecati ratione, necessitatibus voluptas, minima
        doloremque labore vitae. A distinctio voluptatum, accusamus architecto
        quisquam placeat unde dolorum eos, saepe laudantium modi culpa veniam
        dolores nihil debitis! Laudantium nesciunt officia cumque fuga ad
        deserunt quia neque dolores ratione quod aperiam iure facere odit harum,
        non libero provident iusto totam repellendus. Quas voluptate tempora quo
        atque rem dicta dignissimos, reiciendis harum perferendis fugit magnam
        esse, eaque enim deserunt minus aspernatur quasi. Accusantium iste nisi
        totam adipisci necessitatibus dolor vel illum optio consectetur ab
        quibusdam asperiores, molestias delectus quisquam cumque et
        exercitationem dicta? Obcaecati eos omnis asperiores nam aliquid vel
        ullam vero quo, eveniet nesciunt officiis distinctio quasi culpa iste
        inventore laborum sequi itaque? Odit quis culpa magnam excepturi eos!
        Blanditiis similique sequi cumque minima ad error. Inventore nostrum
        voluptas nulla consectetur consequatur velit eligendi vero odio itaque!
        Harum aut consectetur sunt corrupti, doloribus magni illo est recusandae
        deserunt aperiam quae, animi repellat. Sed illum officiis asperiores
        reiciendis, laborum, exercitationem aperiam amet aspernatur, adipisci
        autem esse. Molestias laboriosam obcaecati, vel ab beatae voluptas sed
        minus facere. Dicta obcaecati reprehenderit accusamus voluptates facere
        qui quam veritatis illo adipisci modi porro sit laboriosam in voluptate
        nobis, aspernatur optio soluta quae repellat ex, ducimus eaque culpa.
        Quisquam iusto quibusdam temporibus veritatis est ea distinctio aliquam
        et praesentium corporis dolores ullam, fugit velit reiciendis suscipit,
        vero, ratione dolorem eligendi sequi repudiandae odit expedita eum
        accusantium quae! Eos maxime aut a voluptatum ut repellendus porro
        laboriosam hic voluptas. Temporibus, fugiat rerum! Debitis repudiandae
        praesentium, vitae deleniti omnis quia error qui nobis vero aperiam cum
        aut expedita aliquam ullam neque? Aliquam itaque tempora repudiandae
        iure similique laudantium fuga ad. Laboriosam, ipsa alias in quos
        veritatis animi aliquid eum id voluptatem provident magnam eos iste ea.
        Doloribus voluptates commodi unde. Blanditiis accusamus non modi
        temporibus corporis autem vel rerum eaque perferendis, ea sed
        consequatur doloremque iure soluta hic ipsam quisquam eos excepturi est
        sint repellat? Dolores deserunt itaque, dolorem dignissimos fugit
        tempore perferendis repudiandae accusamus laborum! Doloribus et aliquid
        qui eaque quis, id quam maiores repellat deserunt dolor dicta natus
        aspernatur, illum officia quo fugiat facere impedit suscipit fugit
        consectetur dolore. Dolores voluptatum sequi provident perspiciatis at
        animi cupiditate a illo porro commodi consectetur repellat nihil nemo
        fugiat, modi, possimus doloribus cumque ipsa laudantium id accusamus
        odit dolorem eaque? Est ea quis error perferendis enim reprehenderit
        eveniet ipsum cumque culpa ex pariatur, corporis exercitationem neque
        debitis placeat beatae nemo incidunt magni! Quo ducimus debitis eligendi
        esse nam fuga, nostrum earum commodi ea optio. Repudiandae, ratione
        aliquid ipsum similique incidunt nobis autem, maxime rerum nihil
        repellendus consectetur quidem quae minus, corrupti labore amet
        molestias! Laborum quam aperiam beatae ipsum non repudiandae harum rem
        quia eius magnam? Consequuntur libero maxime est error ea ullam
        aspernatur reprehenderit reiciendis enim. Maiores facilis labore ea a
        vitae vero voluptatibus laboriosam reprehenderit, itaque dicta nisi
        quisquam nostrum? Vitae maxime, nobis distinctio in temporibus iusto
        dicta nostrum esse explicabo nesciunt voluptates! Ad itaque, sint eius
        dolorum illum maiores sit voluptatibus veritatis modi quod praesentium
        neque, saepe aperiam. Aliquid pariatur ut earum, provident est
        excepturi. Enim, perspiciatis illum explicabo expedita atque
        reprehenderit necessitatibus aut qui doloremque cum natus aperiam alias
        ipsa optio neque quod magnam! Quisquam ducimus itaque est, voluptates
        accusantium veritatis quae debitis doloremque blanditiis autem eos alias
        facere quaerat, neque expedita voluptas officia laboriosam unde porro
        quas sequi tenetur qui et! Ipsa aperiam molestias fugit, eaque quam
        quidem nostrum deserunt molestiae error tenetur optio recusandae, beatae
        odio repudiandae doloremque maiores earum suscipit quos dolores numquam
        corrupti deleniti cupiditate tempore? Facere praesentium obcaecati
        eveniet alias ipsa porro corrupti, iure voluptatem et ut, id natus
        molestiae. Quaerat delectus numquam voluptatem voluptatibus fugiat
        sapiente a dicta quam dolore laboriosam repellat nesciunt nihil ea sit,
        molestiae, pariatur perferendis rem laborum soluta quasi tenetur itaque
        quibusdam praesentium. Consequatur quas fugiat provident iusto eius
        dicta atque obcaecati quasi. Doloribus cupiditate magni laudantium
        quidem porro? Architecto recusandae, cum quam dolor earum sint mollitia
        voluptatum, aperiam est cumque nemo quod unde commodi nam ducimus facere
        ex doloribus sunt id consectetur eos modi facilis! Sunt beatae,
        inventore magnam consequuntur vitae omnis culpa fuga vel harum magni
        doloribus autem? Rerum blanditiis possimus veritatis incidunt,
        distinctio repudiandae excepturi iste earum voluptatum odit vitae
        ducimus at nulla ex corrupti molestiae autem enim exercitationem fugiat
        quam dolorem aliquid aliquam.
      </p>
    </section>
  )
}

export default JobType
