import { View, Text } from 'react-native'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'expo-router'

export default function game_over() {
    return (
        <View className='flex-1 items-center justify-center bg-slate-300 p-4'>
            <Text className='text-2xl font-bold text-center'>Congratulations, You guessed the number</Text>
            <Button className='bg-green-800 w-1/2 flex items-center justify-center text-base font-bold mt-6'>
                <Link href='/home' className='text-white font-bold text-center text-xl flex items-center justify-center h-8 '>Play Again</Link>
            </Button>
        </View>
    )
}