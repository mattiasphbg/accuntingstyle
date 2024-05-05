import React from "react";
import { Paragraph, SizableText, Text, XStack, YStack, View } from "tamagui";
export function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <YStack space="$2" alignItems="center">
        <SizableText size="$3" className="text-vanilla">
          SizableText
        </SizableText>
        <XStack space>
          <SizableText theme="alt1" size="$3" className="text-ltGreen">
            alt1
          </SizableText>
          <SizableText theme="alt2" size="$10">
            alt2
          </SizableText>
        </XStack>
        <Paragraph size="$2" fontWeight="800">
          Paragraph
        </Paragraph>
      </YStack>
    </View>
  );
}
