import React from 'react'
import { Button } from '@/components/ui/button'
import { View, ScrollView } from 'react-native'
import { Text } from '@/components/ui/text'
import { Link } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'


const playground = () => {
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

                <View className='flex-1 items-center justify-center mt-10 gap-6 px-6 w-full'>
                    <View className='w-full max-w-[440px] items-center'>
                        <View className='w-full h-24 items-center justify-center rounded-2xl bg-white/10 border border-white/20'>
                            <Text className='text-3xl font-extrabold text-white'>45</Text>
                        </View>
                    </View>

                    <View className='w-full max-w-[440px]'>
                        <View className='items-center justify-center p-2'>
                            <Text className='text-xl font-semibold text-white'>Higher or Lower</Text>
                        </View>

                        <View className='flex-row items-center justify-center gap-4 p-2'>
                            <Button className='bg-white/15 border border-white/20 rounded-full flex-1'>
                                <Text className='text-white text-xl font-bold'>-</Text>
                            </Button>
                            <Button className='bg-white/15 border border-white/20 rounded-full flex-1'>
                                <Text className='text-white text-xl font-bold'>+</Text>
                            </Button>
                        </View>

                        <ScrollView className='w-full mt-4 rounded-2xl bg-white/10 border border-white/20' contentContainerStyle={{ paddingVertical: 4 }}>
                            <View className='flex-row justify-between items-center px-4 py-3 border-b border-white/10'>
                                <Text className='font-bold text-white'>#1</Text>
                                <Text className='text-white/80'>Opponent's Guess: 45</Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>

                <View className='items-center justify-center gap-4 mt-2 pb-6 px-6'>
                    <Link href='/game_over' asChild>
                        <Button className='bg-white/15 border border-white/20 rounded-full w-full max-w-[440px]'>
                            <Text className='text-white text-lg font-semibold'>Game Over</Text>
                        </Button>
                    </Link>
                </View>
            </View>
        </LinearGradient>
    )
}

export default playground