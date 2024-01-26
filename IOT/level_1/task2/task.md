# Basics of MQTT protocol and other communication protocols
***

* MQTT (Message Queuing Telemetry Transport) is a messaging protocol for restricted low-bandwidth networks and extremely high-latency IoT devices. Since Message Queuing Telemetry Transport is specialized for low-bandwidth, high-latency environments, it is an ideal protocol for machine-to-machine (M2M) communication.

* MQTT works on the publisher / subscriber principle and is operated via a central broker. This means that the sender and receiver have no direct connection. The data sources report their data via a publish and all recipients with interest in certain messages (“marked by the topic”) get the data delivered because they have registered as subscribers.

* In IoT and IIoT, MQTT is used all the way to connecting cloud environments.
