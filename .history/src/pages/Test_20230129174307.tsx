import { AppType } from "next/app";
import { Card, CardHeader,ButtonGroup, Button, CardBody, CardFooter, Stack, Image, Heading, Text, Divider, } from '@chakra-ui/react'
import Carousel from "../components/Carousel";



const Test: AppType = () => {
return <div className="test">
   {/*  <video controls src={"/Mon film.mov"} style={{ width: "400px", height:"400px" }} />
    Hello */}
    
    <section className="test">
<video src={"/Mon film.mov"}  autoPlay  muted loop id="myVideo" />
    </section>
  <section className="section ">

    <div className="card-1 flex flex-column justify-center">
        <Card >
          <Heading className="p-2 flex flex-column justify-center">
           <p> Bienvenue en Guadeloupe !</p>
          </Heading>
  <CardBody>
    <Text className="welcome-text">
      
      <p>
Pour des vacances au soleil, sur des plages de sable blanc ou de belles balades dans une verdure luxuriante :
les Gîtes Mon Trésor vous assurent un dépaysement total.

Loin des grandes structures touristiques, dans un jardin calme et ventilé avec piscine sécurisée, Catherine et Laurent, originaires de Normandie, vous accueillent toute l’année dans leurs gîtes situés sur la commune d'ANSE-BERTRAND, à 3 km des plages et de tous commerces.
 Nous avons l'énorme chance de n'avoir jamais de sargasses sur nos plages les plus proches.
Bonne visite !
      </p>


</Text>
  </CardBody>

</Card>


    </div>
  
    <div className=" grid grid-cols-3 gap-4" >
       
<Card maxW='lg' m={3}>
  <Stack mt='6'  spacing='3'>
      <Heading textAlign={} size='md'>Gîte</Heading>
     
    </Stack>
  <CardBody>
    <Carousel />
    
  </CardBody>
 
  <CardFooter>
   
      <Button variant='solid' colorScheme='blue'>
       Détail
      </Button>
     
   
  </CardFooter>
</Card>
    </div>

  </section>

</div>
}

export default Test