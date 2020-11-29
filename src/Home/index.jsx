import React from "react";
import { FiCoffee } from "react-icons/all";
import { Center, Grid, GridItem, Heading, Image, List, ListIcon, ListItem, Text } from "@chakra-ui/react"

export default function Home() {
    return (
        <Grid templateColumns="repeat(10% 40% 40% 10%)">
            <GridItem colSpan={4} height="100vh" bgSize="cover" bgRepeat="no-repeat" bgAttachment="fixed" bgPosition="center" bgImage="url('bg.jpg')">
                <Center height="100vh">
                    <Heading textAlign="center" fontSize="64px" fontFamily="Architects Daughter" color="white">Evan's Cafe</Heading>
                </Center>
            </GridItem>
            <GridItem colSpan={4}>
                <Center>
                    <Image src="/cafelogo.png" />
                </Center>
                <Center>
                    <Heading marginTop={20} textAlign="center" fontSize="32px" fontFamily="Architects Daughter" color="black">Menu</Heading>
                </Center>
                <Center>
                    <Heading textDecoration="underline" marginTop={10} textAlign="center" fontSize="28px" fontFamily="Architects Daughter" color="black">Breakfast</Heading>
                </Center>
            </GridItem>
            <GridItem colStart={2} colSpan={2} paddingBottom={100}>
                <List spacing={5} marginTop={25}>
                    <ListItem>
                        <Grid templateColumns="20% 80%">
                            <GridItem>
                                <Center>
                                    <ListIcon width={25} height={25} as={FiCoffee} />
                                </Center>
                            </GridItem>
                            <GridItem>
                                <Heading fontFamily={"Poiret One"} marginRight={10} fontSize={26} fontWeight={600}>Breakfast Burrito</Heading>
                                <Text fontFamily={"Poiret One"}>Scrambled eggs, home fries, bacon, cheddar, pico de gallo, griddled flour tortilla, tomatillo salsa</Text>
                            </GridItem>
                        </Grid>
                    </ListItem>
                    <ListItem>
                        <Grid templateColumns="20% 80%">
                            <GridItem>
                                <Center>
                                    <ListIcon width={25} height={25} as={FiCoffee} />
                                </Center>
                            </GridItem>
                            <GridItem>
                                <Heading fontFamily={"Poiret One"} marginRight={10} fontSize={26} fontWeight={600}>The Regular</Heading>
                                <Text fontFamily={"Poiret One"}>2 eggs any style, 2 pieces bacon, crispy home fries, sourdough toast</Text>
                            </GridItem>
                        </Grid>
                    </ListItem>
                    <ListItem>
                        <Grid templateColumns="20% 80%">
                            <GridItem>
                                <Center>
                                    <ListIcon width={25} height={25} as={FiCoffee} />
                                </Center>
                            </GridItem>
                            <GridItem>
                                <Heading fontFamily={"Poiret One"} marginRight={10} fontSize={26} fontWeight={600}>Scrambled Eggs</Heading>
                                <Text fontFamily={"Poiret One"}>2 eggs, toast</Text>
                            </GridItem>
                        </Grid>
                    </ListItem>
                    <ListItem>
                        <Grid templateColumns="20% 80%">
                            <GridItem>
                                <Center>
                                    <ListIcon width={25} height={25} as={FiCoffee} />
                                </Center>
                            </GridItem>
                            <GridItem>
                                <Heading fontFamily={"Poiret One"} marginRight={10} fontSize={26} fontWeight={600}>Morning Panini</Heading>
                                <Text fontFamily={"Poiret One"}>2 fried eggs, applewood-smoked bacon, pepper jack, on an english muffin</Text>
                            </GridItem>
                        </Grid>
                    </ListItem>
                    <ListItem>
                        <Center><Text fontFamily={"Poiret One"}>*All dishes come with coffee, a side of 2%, and sugar</Text></Center>
                    </ListItem>
                </List>
                <Center>
                    <Image marginTop={10} src="/us.jpg" />
                </Center>
                <Center>
                    <Text marginTop={10} fontSize={20} fontWeight={600} fontFamily={"Poiret One"}>This cafe is dedicated to the most beautiful, hardworking, and loving person in my life</Text>
                </Center>
            </GridItem>
        </Grid>
    )
}