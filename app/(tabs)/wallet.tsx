import { useRouter } from "expo-router";
import {
  CheckCircle2,
  ChevronLeft,
  CreditCard,
  Plus,
  Search,
  TrendingUp,
  X,
} from "lucide-react-native";
import React, { useState } from "react";
import {
  Alert,
  Modal,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function DompetScreen() {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const [successVisible, setSuccessVisible] = useState(false);
  const [form, setForm] = useState({ nama: "", nomor: "", nominal: "" });

  const handleKirim = () => {
    if (!form.nama || !form.nomor || !form.nominal) {
      Alert.alert("Eits!", "Isi semua datanya dulu bro.");
      return;
    }
    setModalVisible(false);
    setSuccessVisible(true);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#F5F7FA" }}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      {/* HEADER BIRU */}
      <View
        style={{
          backgroundColor: "#0086FF",
          paddingTop: 50,
          paddingHorizontal: 16,
          paddingBottom: 25,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      >
        {/* Baris Atas: Back & Judul Saja */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={{ marginRight: 12 }}
          >
            <ChevronLeft color="#fff" size={28} />
          </TouchableOpacity>
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
            Dompet
          </Text>
        </View>

        {/* BAGIAN SALDO & ACTION BUTTONS */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 25,
            alignItems: "center",
          }}
        >
          <View>
            <Text style={{ color: "rgba(255,255,255,0.8)", fontSize: 13 }}>
              Total Saldo
            </Text>
            <Text style={{ color: "white", fontSize: 26, fontWeight: "bold" }}>
              Rp 49.000
            </Text>
          </View>

          {/* Grouping Riwayat & Plus */}
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <TouchableOpacity
              style={{
                backgroundColor: "rgba(255,255,255,0.2)",
                paddingHorizontal: 15,
                paddingVertical: 8,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: "rgba(255,255,255,0.3)",
              }}
            >
              <Text
                style={{ color: "white", fontSize: 13, fontWeight: "bold" }}
              >
                Riwayat
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={{
                backgroundColor: "#fff",
                borderRadius: 50,
                width: 35,
                height: 35,
                justifyContent: "center",
                alignItems: "center",
                elevation: 3,
              }}
            >
              <Plus color="#0086FF" size={22} strokeWidth={3} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* SEARCH BAR PALSU */}
        <View
          style={{
            backgroundColor: "#fff",
            margin: 16,
            borderRadius: 8,
            padding: 12,
            flexDirection: "row",
            alignItems: "center",
            elevation: 2,
          }}
        >
          <Search size={20} color="#94A3B8" />
          <Text style={{ color: "#94A3B8", marginLeft: 10 }}>
            Lagi cari apa di Dompet?
          </Text>
        </View>

        {/* SECTION METODE PEMBAYARAN */}
        <View style={{ paddingHorizontal: 16, marginBottom: 20 }}>
          <Text
            style={{
              fontSize: 12,
              color: "#64748B",
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            METODE PEMBAYARAN
          </Text>
          <View
            style={{
              backgroundColor: "#fff",
              borderRadius: 12,
              padding: 16,
              flexDirection: "row",
              elevation: 3,
            }}
          >
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: "#E0F2FE",
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CreditCard color="#0086FF" size={20} />
            </View>
            <View style={{ flex: 1, marginLeft: 15 }}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Simpan kartu bank!
              </Text>
              <Text style={{ fontSize: 13, color: "#64748B", marginTop: 4 }}>
                Transaksi bebas ribet dengan berbagai pilihan.
              </Text>
              <TouchableOpacity
                style={{
                  marginTop: 12,
                  borderWidth: 1,
                  borderColor: "#0086FF",
                  alignSelf: "flex-start",
                  paddingHorizontal: 20,
                  paddingVertical: 6,
                  borderRadius: 20,
                }}
              >
                <Text
                  style={{ color: "#0086FF", fontWeight: "bold", fontSize: 12 }}
                >
                  BUKA
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* SECTION INVESTASI */}
        <View style={{ paddingHorizontal: 16, marginBottom: 20 }}>
          <Text
            style={{
              fontSize: 12,
              color: "#64748B",
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            INVESTASI
          </Text>
          <View
            style={{
              backgroundColor: "#fff",
              borderRadius: 12,
              padding: 16,
              flexDirection: "row",
              elevation: 3,
            }}
          >
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: "#E0F2FE",
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TrendingUp color="#0086FF" size={20} />
            </View>
            <View style={{ flex: 1, marginLeft: 15 }}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Saatnya berinvestasi
              </Text>
              <Text style={{ fontSize: 13, color: "#64748B", marginTop: 4 }}>
                Memulai impian dari nominal kecil.
              </Text>
              <TouchableOpacity
                style={{
                  marginTop: 12,
                  borderWidth: 1,
                  borderColor: "#0086FF",
                  alignSelf: "flex-start",
                  paddingHorizontal: 20,
                  paddingVertical: 6,
                  borderRadius: 20,
                }}
              >
                <Text
                  style={{ color: "#0086FF", fontWeight: "bold", fontSize: 12 }}
                >
                  BUKA
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* MODAL FORMULIR */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.5)",
            justifyContent: "flex-end",
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
              padding: 24,
              minHeight: 450,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 25,
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Detail Transfer
              </Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <X color="#000" size={24} />
              </TouchableOpacity>
            </View>

            <Text
              style={{ fontWeight: "bold", color: "#64748B", marginBottom: 8 }}
            >
              Nama Penerima
            </Text>
            <TextInput
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#E2E8F0",
                paddingVertical: 10,
                fontSize: 16,
                marginBottom: 20,
              }}
              placeholder="Masukkan nama"
              value={form.nama}
              onChangeText={(v) => setForm({ ...form, nama: v })}
            />

            <Text
              style={{ fontWeight: "bold", color: "#64748B", marginBottom: 8 }}
            >
              Nomor HP/Rekening
            </Text>
            <TextInput
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#E2E8F0",
                paddingVertical: 10,
                fontSize: 16,
                marginBottom: 20,
              }}
              placeholder="08xxxxxxxxxx"
              keyboardType="phone-pad"
              value={form.nomor}
              onChangeText={(v) => setForm({ ...form, nomor: v })}
            />

            <Text
              style={{ fontWeight: "bold", color: "#64748B", marginBottom: 8 }}
            >
              Nominal (Rp)
            </Text>
            <TextInput
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#E2E8F0",
                paddingVertical: 10,
                fontSize: 16,
                marginBottom: 30,
              }}
              placeholder="Minimum 10.000"
              keyboardType="number-pad"
              value={form.nominal}
              onChangeText={(v) => setForm({ ...form, nominal: v })}
            />

            <TouchableOpacity
              onPress={handleKirim}
              style={{
                backgroundColor: "#0086FF",
                padding: 18,
                borderRadius: 15,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
                Kirim Sekarang
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* MODAL BERHASIL */}
      <Modal visible={successVisible} animationType="fade" transparent={true}>
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.7)",
            justifyContent: "center",
            padding: 20,
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              borderRadius: 20,
              padding: 30,
              alignItems: "center",
            }}
          >
            <CheckCircle2 color="#2EECAE" size={80} />
            <Text style={{ fontSize: 22, fontWeight: "bold", marginTop: 20 }}>
              Transfer Berhasil!
            </Text>
            <View
              style={{
                backgroundColor: "#F8FAFC",
                width: "100%",
                borderRadius: 15,
                padding: 20,
                marginTop: 20,
                gap: 12,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "#64748B" }}>Nama</Text>
                <Text style={{ fontWeight: "bold" }}>{form.nama}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "#64748B" }}>Nomor</Text>
                <Text style={{ fontWeight: "bold" }}>{form.nomor}</Text>
              </View>
              <View
                style={{
                  height: 1,
                  backgroundColor: "#E2E8F0",
                  marginVertical: 5,
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "#64748B" }}>Total</Text>
                <Text
                  style={{ fontWeight: "bold", color: "#0086FF", fontSize: 18 }}
                >
                  Rp{form.nominal}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                setSuccessVisible(false);
                setForm({ nama: "", nomor: "", nominal: "" });
              }}
              style={{
                backgroundColor: "#002B49",
                width: "100%",
                padding: 18,
                borderRadius: 15,
                alignItems: "center",
                marginTop: 30,
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "bold" }}>Tutup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
