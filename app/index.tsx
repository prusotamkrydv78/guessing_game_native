import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { Link } from 'expo-router';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Index() {
  return (
    <LinearGradient
      colors={['#0ea5e9', '#8b5cf6']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className='flex-1'
    >
      <View className='flex-1 items-center justify-center p-6 gap-6'>
        <View className='items-center gap-2'>
          <Text className='text-3xl font-extrabold text-center text-white'>Guessing Game</Text>
          <Text className='text-white/80 text-center'>Try to guess the secret number</Text>
        </View>

        <Link href='/home' asChild>
          <Button className='bg-white/15 border border-white/20 rounded-full px-6 shadow-md'>
            <Text className='text-white font-medium'>Play Game</Text>
          </Button>
        </Link>
      </View>
    </LinearGradient>
  );
}
