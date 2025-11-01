
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { Link } from 'expo-router';
import { View } from 'react-native';
export default function Index() {
  return (
    <View className='flex-1 items-center bg-gray-50 justify-center'>
      <Text className='text-2xl font-bold'>Guessing Game</Text>
      <Button className='mt-4'>
        <Link href='/home' className='text-white'>Play Game</Link>
      </Button>

    </View>
  );
}
