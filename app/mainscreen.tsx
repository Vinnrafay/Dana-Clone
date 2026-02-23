import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Onboarding() {
  const router = useRouter();

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#108EE9", paddingHorizontal: 25 }}
    >
      {/* 1. PROGRESS BAR (Atas) */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <View style={styles.progressActive} />
        <View style={styles.progressInactive} />
        <View style={styles.progressInactive} />
      </View>

      {/* 2. LOGO & CONTENT (Tengah) */}
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          source={require("../assets/images/dana_logo.png")}
          style={{ width: 180, height: 60 }} // Sesuaikan ukuran logo lo
          resizeMode="contain"
        />

        <Text
          style={{
            color: "white",
            fontSize: 26,
            textAlign: "center",
            paddingHorizontal: 10,
            lineHeight: 38,
            marginTop: 40,
            fontWeight: "700", // Pengganti PoppinsSemi kalau belum install
          }}
        >
          Simpler transactions for all your needs
        </Text>
      </View>

      {/* 3. BUTTON (Bawah) */}
      <View style={{ marginBottom: 40 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            paddingVertical: 16,
            borderRadius: 10, // DANA aslinya agak rounded kotak
            alignItems: "center",
            elevation: 5,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 5,
          }}
          activeOpacity={0.9}
          onPress={() => router.replace("/(tabs)")} // Pake replace biar user gak bisa back ke onboarding
        >
          <Text
            style={{
              color: "#108EE9",
              fontSize: 16,
              letterSpacing: 1.5,
              fontWeight: "900", // Biar tegas "MULAI"-nya
            }}
          >
            MULAI
          </Text>
        </TouchableOpacity>

        <Text
          style={{
            color: "rgba(255,255,255,0.6)",
            textAlign: "center",
            marginTop: 20,
            fontSize: 12,
          }}
        >
          PT Bank Dana Indonesia berizin dan diawasi oleh OJK.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = {
  progressActive: {
    height: 4,
    flex: 1,
    backgroundColor: "white",
    marginHorizontal: 4,
    borderRadius: 2,
  },
  progressInactive: {
    height: 4,
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    marginHorizontal: 4,
    borderRadius: 2,
  },
};
