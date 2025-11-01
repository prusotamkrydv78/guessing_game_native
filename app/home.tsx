import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Text } from '@/components/ui/text'
import { Link } from 'expo-router'
import { View } from 'react-native'

const home = () => {
    return (
        <View className='flex-1 p-4 bg-slate-300'>
            <View className=' items-center rounded-lg bg-slate-400 w-full p-4'>
                <Text className='text-2xl font-bold text-center'>Guess A Random Number</Text>
            </View>
            <View className='items-center justify-center mt-4  bg-slate-400 p-4 rounded-lg '>
                <Text className='text-2xl font-bold text-center'>Enter a number</Text>
                <View className=' items-center justify-center flex-col gap-4 mt-4'>
                    <Input placeholder='Enter a number' className='w-1/2 min-w-[100px] bg-slate-200 rounded-lg' keyboardType='numeric' />

                    <View className='flex-row items-center justify-center gap-4'>

                        <Button className='bg-red-700'>
                            <Text className='text-white '>Reset</Text>
                        </Button>
                        <Button className='bg-green-800'>
                            <Link href='/playground' className='text-white'>Confirm</Link>
                        </Button>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default home