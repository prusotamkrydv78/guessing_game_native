import React from 'react'
import { Button } from '@/components/ui/button'
import { Text, View } from 'react-native'
import { Link } from 'expo-router'
import { ScrollView } from 'react-native'


const playground = () => {
    return (
        <View className='flex-1 items-center   bg-slate-300 pt-4'>
            <View className='items-center justify-center gap-4 mt-4'>
                <Text className='text-2xl font-bold'>Let, the game begin</Text>

            </View>
            <View className=' flex-1 items-center justify-center mt-16 gap-4 '>
                <View className='flex-row items-center justify-center gap-4 p-4 '>
                    <View className='border-4 rounded-md w-full h-20 flex items-center justify-center bg-slate-400'>

                        <Text className='text-2xl font-bold'>45</Text>
                    </View>
                </View>

                <View>
                    <View className='flex-row items-center justify-center gap-4 p-4 '>
                        <Text className='text-2xl font-bold'>Higher or Lower</Text>
                    </View>
                    <View className='flex-row items-center justify-center gap-4 p-4  px-8 '>
                        <Button className='bg-red-800 w-1/2 flex items-center justify-center text-base font-bold'>
                            <Text className='text-white font-bold text-center text-2xl flex items-center justify-center h-8'>-</Text>
                        </Button>
                        <Button className='bg-green-800 w-1/2 flex items-center justify-center text-base font-bold'>
                            <Text className='text-white font-bold text-center text-2xl flex items-center justify-center h-8'>+</Text>
                        </Button>
                    </View>
                    <ScrollView className='w-full ' contentContainerStyle={{
                        alignItems: 'center', justifyContent: 'center',
                        gap: 2
                    }}>
                        <View className='flex-row justify-between px-4 gap-4 p-4 w-full'>
                            <Text className='font-bold'>#1</Text>
                            <View>
                                <Text className=' font-medium'>Opponent's Guess:45</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
            <View className='items-center justify-center gap-4 mt-4'>
                <Button className='bg-green-800 w-1/2 flex items-center justify-center text-base font-bold'>
                    <Link href='/game_over' className='text-white font-bold text-center text-2xl flex items-center justify-center h-8'>game over</Link>
                </Button>
            </View>
        </View>
    )
}

export default playground