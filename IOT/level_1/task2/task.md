# *Basics of MQTT Protocol and Other Communication Protocols*

# MQTT

![img1](https://raw.githubusercontent.com/Shivamrut/UVCE-MARVEL/main/IOT/level_1/task2/img3.png)

* MQTT, developed by IBM in the late 1990s, initially served the purpose of linking sensors on oil pipelines to satellites. As its name suggests, MQTT (Message Queuing Telemetry Transport) is a messaging protocol designed for asynchronous communication between two parties.

* Specialized for low-bandwidth, high-latency environments, MQTT is an ideal protocol for machine-to-machine (M2M) communication. It operates on the publisher/subscriber principle and relies on a central broker. This architecture allows data sources to report their information through publishing, and subscribers interested in specific messages (designated by topics) receive the data from the broker.

* In the realms of IoT and IIoT, MQTT is widely used, extending all the way to connecting cloud environments.

## MQTT as a Better Choice for IoT Device Communication than HTTP

Choosing MQTT over HTTP for IoT communication is often a strategic decision. While HTTP is a well-established protocol and familiar to many developers, MQTT offers several advantages:

* **Synchronous vs. Asynchronous:** HTTP is synchronous, meaning the client waits for the server's response, resulting in poor scalability. In IoT, where numerous devices are connected, asynchronous messaging is more effective. MQTT allows devices to send readings over the network, leaving it to the network to determine the optimal path and timing for delivery.

* **Connection Initiation:** HTTP is a one-way protocol where the client must initiate the connection. In IoT applications, devices and sensors are typically clients, and they cannot passively receive commands. MQTT supports bidirectional communication more effectively.

* **Protocol Efficiency:** HTTP is a 1-1 protocol, making it expensive to broadcast messages over the network, a common requirement in IoT devices. MQTT, with its publish-subscribe model, enables efficient broadcasting of messages to subscribed clients.

## How MQTT Works

![img2](https://raw.githubusercontent.com/Shivamrut/UVCE-MARVEL/main/IOT/level_1/task2/img2.webp)

The MQTT protocol operates on a publish-subscribe model, facilitating indirect communication between the message sender and receiver. The process involves a publisher connecting to a broker, which then broadcasts the message to devices subscribed to the relevant topic. When a publisher sends a message on a specific topic subscribed by a client, the broker forwards the message to that particular client. This architectural approach enhances scalability and flexibility in IoT communication.


# Commonly Used Communication Protocols and Examples

![img3](https://raw.githubusercontent.com/Shivamrut/UVCE-MARVEL/main/IOT/level_1/task2/img4.jpg)

## 1. MQTT (Message Queuing Telemetry Transport)

- **Description:** MQTT is a lightweight and efficient messaging protocol designed for low-bandwidth, high-latency networks. It is commonly used for machine-to-machine (M2M) communication in IoT.
- **Example:** Smart home devices, industrial automation.

## 2. HTTP (Hypertext Transfer Protocol)

- **Description:** HTTP is a protocol for transferring hypertext documents on the web. It is the foundation of data communication on the World Wide Web and is widely used for web browsing.
- **Example:** Web browsing, accessing websites.

## 3. Bluetooth

- **Description:** Bluetooth is a wireless communication protocol designed for short-range communication between devices. It is commonly used for connecting devices like smartphones, speakers, and peripherals.
- **Example:** Wireless headphones, smartphone connectivity.

## 4. Cellular (e.g., LTE, 5G)

- **Description:** Cellular communication protocols, such as LTE (Long-Term Evolution) and 5G, enable wireless communication over mobile networks. They provide high-speed data transfer for mobile devices.
- **Example:** Mobile phones, mobile internet.

## 5. Wi-Fi

- **Description:** Wi-Fi is a wireless networking protocol that allows devices to connect to a local area network (LAN) and access the internet. It is widely used for wireless internet connectivity.
- **Example:** Home and office networks, smart home devices.

## 6. Zigbee

- **Description:** Zigbee is a low-power, low-data-rate wireless communication protocol commonly used in IoT applications. It is suitable for short-range, low-energy devices.
- **Example:** Smart lighting systems, home automation.

## 7. LoRaWAN (Long Range Wide Area Network)

- **Description:** LoRaWAN is a low-power, wide-area networking protocol designed for long-range communication between low-power devices. It is used in IoT applications that require extended coverage.
- **Example:** Smart agriculture, outdoor sensor networks.

## 8. NFC (Near Field Communication)

- **Description:** NFC is a short-range wireless communication protocol that enables communication between devices by bringing them close together. It is often used for contactless payments and data transfer.
- **Example:** Contactless payments, smart access cards.

## 9. CoAP (Constrained Application Protocol)

- **Description:** CoAP is a lightweight, RESTful protocol designed for resource-constrained devices in IoT. It is commonly used for efficient communication between devices.
- **Example:** IoT devices in constrained environments.

## 10. UDP (User Datagram Protocol)

- **Description:** UDP is a connectionless communication protocol that provides a simple way to send data between devices. It is often used for real-time applications where low latency is crucial.
- **Example:** Online gaming, live streaming.

