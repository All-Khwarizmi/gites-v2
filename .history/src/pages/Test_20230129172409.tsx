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
    <Carousel />
    <div className=" grid grid-cols-4 gap-4" >
       
<Card maxW='sm'>
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
     
    </ButtonGroup>
  </CardFooter>
</Card>
    </div>

  </section>

</div>
}

export default Test