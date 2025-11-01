import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import { GuessedList, GuessedNumber } from '@/constant'
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Alert, ScrollView, View } from 'react-native'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog' 
import { FlatList } from 'react-native'
let min = 1;
let max = 100;
const generateRandomNumber = (min: number, max: number, exculde: number) => {
    const random = Math.floor(Math.random() * (max - min + 1) + min)
    if (random === exculde) {
        return generateRandomNumber(min, max, exculde)
    }
    return random
}
const playground = () => {
    const [guessedNumber, setGuessedNumber] = useState<number | null>(Number(GuessedNumber[0]))
    const initialGuess = generateRandomNumber(min, max, guessedNumber!)
    const [currentGuess, setCurrentGuess] = useState<number | null>(initialGuess)
    const [guessedList, setGuessedList] = useState<string[]>([...GuessedList])
    const router = useRouter()
    const [open, setOpen] = useState(false)
    const handleNextGuess = (direction: string) => {
        if ((direction === 'lower' && currentGuess! <= guessedNumber!) || (direction === 'higher' && currentGuess! >= guessedNumber!)) {
            setOpen(true)
            return
        }

        if (direction === 'lower') {
            max = currentGuess!
        } else {
            min = currentGuess!
        }
        const nextGuess = generateRandomNumber(min, max, currentGuess!)
        GuessedList.push(currentGuess!.toString())
        setGuessedList(prev => [...prev, currentGuess!.toString()])
        setCurrentGuess(nextGuess)
    }
    useEffect(() => {
        if (currentGuess === guessedNumber) {
            router.push('/game_over')
        }
    }, [currentGuess])


    return (
        <LinearGradient
            colors={['#0ea5e9', '#8b5cf6']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className='flex-1'
        >
            <View className='flex-1 pt-6'>
                <View className='items-center justify-center gap-2'>
                    <Text className='text-2xl font-bold text-white'>Let the game begin</Text>
                    <Text className='text-white/80'>Make a call: higher or lower</Text>
                </View>

                <View className='flex-1 items-center  mt-10 gap-6 px-6 w-full'>
                    <View className='w-full max-w-[440px] items-center'>
                        <View className='w-full h-24 items-center justify-center rounded-2xl bg-white/10 border border-white/20'>
                            <Text className='text-3xl font-extrabold text-white'>{currentGuess?.toString()}</Text>
                        </View>
                    </View>

                    <View className='w-full max-w-[440px]'>
                        <View className='items-center justify-center p-2'>
                            <Text className='text-xl font-semibold text-white'>Higher or Lower</Text>
                        </View>

                        <View className='flex-row items-center justify-center gap-4 p-2'>
                            <Button className='bg-white/15 border border-white/20 rounded-full flex-1' onPress={() => handleNextGuess('lower')}>
                                <Text className='text-white text-xl font-bold'
                                >-</Text>
                            </Button>
                            <Button className='bg-white/15 border border-white/20 rounded-full flex-1' onPress={() => handleNextGuess('higher')}>
                                <Text className='text-white text-xl font-bold'
                                >+</Text>
                            </Button>
                        </View>

                        <View className='w-full mt-4 rounded-2xl bg-white/10 border border-white/20' style={{ paddingVertical: 4 }}>
                            <FlatList
                                data={guessedList}
                                keyExtractor={(index) => index.toString()}
                                renderItem={({ item, index }) => (
                                    <View className='flex-row justify-between items-center px-4 py-3 border-b border-white/10'>
                                        <Text className='font-bold text-white'>#{index + 1}</Text>
                                        <Text className='text-white/80'>Opponent's Guess: {item}</Text>
                                    </View>
                                )} />

                        </View>
                    </View>
                </View>


            </View>

            <AlertDialog open={open} onOpenChange={setOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Invalid Guess? </AlertDialogTitle>
                        <AlertDialogDescription>
                            Please enter a valid guess
                        </AlertDialogDescription>
                        <AlertDialogFooter>
                            <AlertDialogAction onPress={() => setOpen(false)}>
                                <Text>Try Again</Text>
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogHeader>
                </AlertDialogContent>
            </AlertDialog>
        </LinearGradient>
    )
}

export default playground