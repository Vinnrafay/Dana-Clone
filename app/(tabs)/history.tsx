import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HistoryScreen() {
  const cardShadow = {
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#F5F7FA" }}
      edges={["top", "left", "right"]}
    >
      {/* 1. HEADER BIRU */}
      <View
        style={{
          backgroundColor: "#108EE9",
          paddingHorizontal: 16,
          paddingBottom: 20,
          paddingTop: 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <TouchableOpacity>
            <Ionicons name="chevron-back" size={24} color="white" />
          </TouchableOpacity>
          <Text
            style={{
              flex: 1,
              textAlign: "center",
              color: "white",
              fontSize: 18,
              fontWeight: "600",
              marginRight: 24,
            }}
          >
            History Transactions
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            backgroundColor: "rgba(255,255,255,0.2)",
            borderRadius: 8,
            padding: 4,
          }}
        >
          <TouchableOpacity
            style={{ flex: 1, paddingVertical: 10, alignItems: "center" }}
          >
            <Text style={{ color: "white", fontWeight: "600", opacity: 0.7 }}>
              In Progress
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              paddingVertical: 10,
              alignItems: "center",
              borderRadius: 6,
              backgroundColor: "white",
            }}
          >
            <Text style={{ color: "#108EE9", fontWeight: "700" }}>
              Completed
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 2. LIST TRANSAKSI */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <View style={{ paddingVertical: 10 }}>
          <TransactionItem
            type="Send Money"
            date="30 Jun 2023 21:00"
            amount="-Rp800.000"
            shadow={cardShadow}
          />
          <TransactionItem
            type="Receive Money"
            date="30 Jun 2023 20:15"
            amount="Rp400.000"
            shadow={cardShadow}
          />
          <TransactionItem
            type="Top Up"
            date="29 Jun 2023 11:00"
            amount="Rp200.000"
            shadow={cardShadow}
          />
          <TransactionItem
            type="Receive Money"
            date="28 Jun 2023 09:30"
            amount="Rp100.000"
            shadow={cardShadow}
          />
          <TransactionItem
            type="Send Money"
            date="28 Jun 2023 07:12"
            amount="-Rp200.000"
            shadow={cardShadow}
          />
          <TransactionItem
            type="Top Up"
            date="27 Jun 2023 15:00"
            amount="Rp700.000"
            shadow={cardShadow}
          />
          <TransactionItem
            type="Receive Money"
            date="26 Jun 2023 18:00"
            amount="Rp200.000"
            shadow={cardShadow}
          />
          <TransactionItem
            type="Send Money"
            date="25 Jun 2023 10:00"
            amount="-Rp200.000"
            shadow={cardShadow}
          />
          <TransactionItem
            type="Top Up"
            date="24 Jun 2023 12:00"
            amount="Rp100.000"
            shadow={cardShadow}
          />
        </View>
      </ScrollView>

      {/* 3. BOTTOM FILTER */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "white",
          borderTopWidth: 1,
          borderTopColor: "#EEE",
          paddingVertical: 15,
          paddingBottom: Platform.OS === "ios" ? 35 : 15,
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 10,
        }}
      >
        <TouchableOpacity style={styles.filterBtn}>
          <MaterialCommunityIcons
            name="sort-variant"
            size={20}
            color="#108EE9"
          />
          <Text style={styles.filterText}>Sort</Text>
        </TouchableOpacity>
        <View style={{ width: 1, height: 20, backgroundColor: "#EEE" }} />
        <TouchableOpacity style={styles.filterBtn}>
          <MaterialCommunityIcons
            name="filter-outline"
            size={20}
            color="#108EE9"
          />
          <Text style={styles.filterText}>Filter</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// --- Komponen Item dengan Logic Warna Otomatis ---
function TransactionItem({ type, date, amount, shadow }: any) {
  const isNegative = amount.startsWith("-");
  const themeColor = isNegative ? "#FF3B30" : "#4CD964"; // Merah jika -, Hijau jika +

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        marginHorizontal: 16,
        marginVertical: 6,
        padding: 16,
        borderRadius: 12,
        ...shadow,
      }}
    >
      <View
        style={{
          width: 48,
          height: 48,
          borderRadius: 12,
          backgroundColor: themeColor + "15", // Background transparan tipis
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MaterialCommunityIcons
          name={
            type === "Top Up"
              ? "wallet-plus"
              : type === "Send Money"
                ? "send"
                : "hand-coin"
          }
          size={24}
          color={themeColor}
        />
      </View>

      <View style={{ flex: 1, marginLeft: 15 }}>
        <Text style={{ fontSize: 14, fontWeight: "700", color: "#333" }}>
          {type}
        </Text>
        <Text style={{ fontSize: 12, color: "#999", marginTop: 4 }}>
          {date}
        </Text>
      </View>

      <Text style={{ fontSize: 15, fontWeight: "800", color: themeColor }}>
        {amount}
      </Text>
    </View>
  );
}

const styles = {
  filterBtn: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  filterText: {
    marginLeft: 8,
    color: "#108EE9",
    fontWeight: "700",
    fontSize: 14,
  },
};
