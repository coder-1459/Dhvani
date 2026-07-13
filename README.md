# 🎧 Dhvani

> Sound in its purest form. A distraction-free, ad-free music streaming application engineered for true audiophiles.

Dhvani is a premium, minimalist music player built with **Flutter** and designed using **Clean Architecture** principles. It features high-fidelity streaming, persistent background audio sessions, offline caching, and on-device playlist curation—all packaged within a sleek, modern glassmorphic interface.

---

## 🌟 Key Features

* **Studio-Grade Playback**: Stream high-fidelity audio up to 320kbps for crystal-clear acoustics, or adjust dynamically to 96kbps to conserve data.
* **Persistent Background Audio**: Fully integrated with system-level media controls, offering stable background playback that remains uninterrupted even when multitasking or putting the device to sleep.
* **Zero Distractions**: No ads, no popups, no account registrations, and no mandatory logins. Just launch the app and play.
* **Local Curations**: Create and organize custom playlists directly on your device. All configurations and lists are saved locally for private, ultra-fast access.
* **Smart Caching**: Local caching of tracks ensures smooth playback with minimal network latency.

---

## 🛠 Tech Stack & Architecture

Dhvani is engineered from the ground up to ensure scalability, ease of testing, and high runtime performance.

* **Core Framework**: [Flutter](https://flutter.dev) (Dart)
* **Architecture**: Clean Architecture with feature-first folder structure:
  * **Data Layer**: Local storage repositories, database drivers, and network clients.
  * **Domain Layer**: Core models and business use-cases.
  * **Presentation Layer**: State-notifiers, views, and glassmorphic UI components.
* **State Management**: [Flutter Riverpod](https://riverpod.dev) for reactive state updates and structured dependency injection.
* **Local Databases**: [Hive](https://pub.dev/packages/hive) for high-performance, lightweight key-value offline storage.
* **Audio Engine**: [just_audio](https://pub.dev/packages/just_audio) & [audio_service](https://pub.dev/packages/audio_service) for platform-native background audio tasks.

---

## 🚀 Getting Started

Follow these steps to run Dhvani locally on your development machine.

### Prerequisites

Ensure you have the following installed:
* [Flutter SDK](https://docs.flutter.dev/get-started/install) (Stable channel)
* [Android SDK](https://developer.android.com/studio) (for Android compilation)
* [Cocoapods](https://cocoapods.org) (for iOS compilation, macOS only)

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/M-Player.git
   cd M-Player
   ```

2. **Fetch Dependencies**
   ```bash
   flutter pub get
   ```

3. **Generate Adaptive Launcher Icons**
   ```bash
   flutter pub run flutter_launcher_icons:main
   ```

4. **Run the Application**
   Connect a mobile device or launch an emulator, then execute:
   ```bash
   flutter run
   ```

---

## 📂 Project Structure

```text
lib/
├── core/
│   ├── theme/           # Glassmorphic themes and colors
│   └── utils/           # Shared utility classes
├── data/
│   └── models/          # Data transfer objects and models
├── domain/
│   └── usecases/        # Core business operations
└── features/
    ├── home/            # Home screen feed and carousels
    ├── player/          # Playback panels, wave visualizers
    ├── playlist/        # Playlist management
    └── search/          # Media search client
```

---

## 📄 License & Compliance

Dhvani is provided for personal, non-commercial use. Audio streams are fetched dynamically from public Content Delivery Networks (CDNs). The app does not host, index, or redistribute any copyrighted materials. 

For full legal information, please consult the website's Terms of Service and Privacy Policy.
