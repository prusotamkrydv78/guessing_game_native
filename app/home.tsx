import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Text } from '@/components/ui/text'
import { Link } from 'expo-router'
import { View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const home = () => {
    return (
        <LinearGradient
            colors={['#0ea5e9', '#8b5cf6']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className='flex-1'
        >
            <View className='flex-1 p-6 gap-6'>
                <View className='w-full items-center rounded-2xl bg-white/10 border border-white/20 p-5'>
                    <Text className='text-2xl font-bold text-center text-white'>Guess A Random Number</Text>
                </View>

                <View className='items-center justify-center w-full rounded-2xl bg-white/10 border border-white/20 p-5 gap-4'>
                    <Text className='text-xl font-semibold text-center text-white'>Enter a number</Text>
                    <View className='items-center justify-center gap-4 w-full'>
                        <Input placeholder='Enter a number' className='w-1/2 min-w-[140px] bg-white/80 rounded-lg' keyboardType='numeric' />

                        <View className='flex-row items-center justify-center gap-4'>
                            <Button className='bg-white/15 border border-white/20 rounded-full px-4'>
                                <Text className='text-white'>Reset</Text>
                            </Button>

                            <Link href='/playground' asChild>
                                <Button className='bg-white/15 border border-white/20 rounded-full px-6'>
                                    <Text className='text-white'>Confirm</Text>
                                </Button>
                            </Link>
                        </View>
                    </View>
                </View>
            </View>
        </LinearGradient>
    )
}

export default home