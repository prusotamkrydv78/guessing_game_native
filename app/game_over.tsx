import { View } from 'react-native'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import { Link } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'
import { GuessedList } from '@/constant'

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
                    Congratulations, You guessed the number in {GuessedList.length} attempts
                </Text>

                <View className='w-full mt-4 rounded-2xl bg-white/10 border border-white/20' style={{ paddingVertical: 4 }}>
                    <Link href='/home' asChild>
                         
                            <Text className='text-white text-xl font-bold text-center'>
                                Play Again
                            </Text> 
                    </Link>
                </View>
            </View>
        </LinearGradient>
    )
}