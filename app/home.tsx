import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Text } from '@/components/ui/text'
import { Link } from 'expo-router'
import { View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import { GuessedNumber } from '@/constant'
import { useRouter } from 'expo-router'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog'


const home = () => {
    const [number, setNumber] = useState<number | null>(null)
    const router = useRouter()
    const [open, setOpen] = useState(false)

    const onConfirm = () => {
        if (!number) {

            setOpen(true)
            return
        }
        if (number) {
            if (number === 0) {
                setOpen(true)

            } else if (number < 1) {
                setOpen(true)

            } else if (number > 100) {
                setOpen(true)

            } else {
                GuessedNumber.push(number)
                setNumber(null)
                router.push('/playground')
            }
        }
    }

    return (
        <LinearGradient
            colors={['#0ea5e9', '#8b5cf6']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className='flex-1'
        >
            <View className='flex-1 p-6 gap-6'>
                <View className='w-full items-center rounded-2xl bg-white/10 border border-white/20 p-5'>
                    <Text className='text-2xl font-bold text-center text-white'>Pick A Random Number</Text>
                </View>

                <View className='items-center justify-center w-full rounded-2xl bg-white/10 border border-white/20 p-5 gap-4'>
                    <Text className='text-xl font-semibold text-center text-white'>Enter a number</Text>
                    <View className='items-center justify-center gap-4 w-full'>
                        <Input placeholder='Enter a number' className='w-1/2 min-w-[140px] bg-white/80 rounded-lg' keyboardType='numeric' onChangeText={(text) => setNumber(Number(text))}
                            value={number?.toString()}
                        />

                        <View className='flex-row items-center justify-center gap-4'>
                            <Button className='bg-white/15 border border-white/20 rounded-full px-4' onPress={() => setNumber(null)}>
                                <Text className='text-white'>Reset</Text>
                            </Button>

                            <Button className='bg-white/15 border border-white/20 rounded-full px-6' onPress={onConfirm}>
                                <Text className='text-white'>Confirm</Text>
                            </Button>
                        </View>
                    </View>
                </View>
            </View>
            <AlertDialog open={open} onOpenChange={setOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Invalid Number? </AlertDialogTitle>
                        <AlertDialogDescription>
                            Please enter a number between 1 and 100
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogAction onPress={() => setOpen(false)}>
                            <Text>Try Again</Text>
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </LinearGradient>
    )
}

export default home