import { Feather, MaterialIcons } from "@expo/vector-icons";
import {
    CameraView,
    useCameraPermissions,
    type BarcodeScanningResult,
} from "expo-camera";
import { useEffect, useRef, useState } from "react";
import {
    ActivityIndicator,
    Animated,
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const { width, height } = Dimensions.get("window");
const innerDimension = width * 0.7; // Ukuran kotak scan

export default function Pay() {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView | null>(null);
  const [torch, setTorch] = useState(false);
  const [scanned, setScanned] = useState(false);
  const scanLineAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!permission) requestPermission();

    // Animasi garis scan naik turun
    Animated.loop(
      Animated.sequence([
        Animated.timing(scanLineAnim, {
          toValue: innerDimension,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(scanLineAnim, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [permission, requestPermission]);

  const handleBarCodeScanned = ({ data }: BarcodeScanningResult) => {
    setScanned(true);
    alert(`QR Code Scanned: ${data}`);
    // Navigasi ke input nominal biasanya di sini
  };

  if (!permission || !permission.granted) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#108EE9" />
        <Text style={styles.text}>Minta izin kamera dulu ya, wok...</Text>
        {!permission?.granted && (
          <TouchableOpacity style={styles.retryBtn} onPress={requestPermission}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              GRANT PERMISSION
            </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <CameraView
        ref={(ref) => (cameraRef.current = ref)}
        style={StyleSheet.absoluteFillObject}
        facing="back"
        enableTorch={torch}
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
      />

      {/* --- OVERLAY ALA DANA --- */}
      <View style={styles.overlayArea}>
        {/* Bagian Atas Gelap */}
        <View style={styles.darkFiller} />

        <View style={{ flexDirection: "row" }}>
          {/* Samping Kiri Gelap */}
          <View style={styles.darkFiller} />

          {/* AREA SCAN (TRANSPARAN) */}
          <View style={styles.scanSquare}>
            <Animated.View
              style={[
                styles.scanLine,
                { transform: [{ translateY: scanLineAnim }] },
              ]}
            />
            {/* Corner Borders */}
            <View
              style={[
                styles.corner,
                { top: 0, left: 0, borderLeftWidth: 4, borderTopWidth: 4 },
              ]}
            />
            <View
              style={[
                styles.corner,
                { top: 0, right: 0, borderRightWidth: 4, borderTopWidth: 4 },
              ]}
            />
            <View
              style={[
                styles.corner,
                {
                  bottom: 0,
                  left: 0,
                  borderLeftWidth: 4,
                  borderBottomWidth: 4,
                },
              ]}
            />
            <View
              style={[
                styles.corner,
                {
                  bottom: 0,
                  right: 0,
                  borderRightWidth: 4,
                  borderBottomWidth: 4,
                },
              ]}
            />
          </View>

          {/* Samping Kanan Gelap */}
          <View style={styles.darkFiller} />
        </View>

        {/* Bagian Bawah Gelap */}
        <View
          style={[
            styles.darkFiller,
            { flex: 1.5, alignItems: "center", paddingTop: 30 },
          ]}
        >
          <Text style={styles.hintText}>Scan QR Code / QRIS to Pay</Text>

          <View style={styles.actionRow}>
            <TouchableOpacity
              onPress={() => setTorch(!torch)}
              style={styles.iconCircle}
            >
              <MaterialIcons
                name={torch ? "flash-on" : "flash-off"}
                size={24}
                color="white"
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconCircle}>
              <Feather name="image" size={24} color="white" />
            </TouchableOpacity>
          </View>

          {scanned && (
            <TouchableOpacity
              style={styles.rescanBtn}
              onPress={() => setScanned(false)}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                TAP TO SCAN AGAIN
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Close Button */}
      <TouchableOpacity style={styles.closeBtn}>
        <MaterialIcons name="close" size={28} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  text: { color: "#333", marginTop: 15, fontWeight: "600" },
  overlayArea: { ...StyleSheet.absoluteFillObject },
  darkFiller: { flex: 1, backgroundColor: "rgba(0,0,0,0.6)" },
  scanSquare: {
    width: innerDimension,
    height: innerDimension,
    backgroundColor: "transparent",
    position: "relative",
  },
  scanLine: {
    width: "100%",
    height: 2,
    backgroundColor: "#108EE9",
    shadowColor: "#108EE9",
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
  },
  corner: {
    position: "absolute",
    width: 30,
    height: 30,
    borderColor: "#108EE9",
  },
  hintText: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 20,
  },
  actionRow: { flexDirection: "row", gap: 30 },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgba(255,255,255,0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  retryBtn: {
    marginTop: 20,
    backgroundColor: "#108EE9",
    padding: 12,
    borderRadius: 8,
  },
  rescanBtn: {
    marginTop: 30,
    backgroundColor: "rgba(16, 142, 233, 0.8)",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  closeBtn: { position: "absolute", top: 50, left: 20 },
});
