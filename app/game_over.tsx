import { View } from 'react-native'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import { Link } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'

export default function game_over() {
    return (
        <LinearGradient
            colors={['#0ea5e9', '#8b5cf6']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className='flex-1'
        >
            <View className='flex-1 items-center justify-center p-6 gap-6'>
                <Text className='text-2xl font-bold text-center text-white'>
                    Congratulations, You guessed the number
                </Text>

                <Link href='/home' asChild>
                    <Button className='bg-white/15 border border-white/20 rounded-full w-1/2 mt-2 shadow-md'>
                        <Text className='text-white text-xl font-bold text-center'>
                            Play Again
                        </Text>
                    </Button>
                </Link>
            </View>
        </LinearGradient>
    )
}