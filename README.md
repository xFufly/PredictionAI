# PredictionAI

**Version 1.0.0**
Author: [DIDELOT Tim](https://github.com/xFufly)
License: MIT

---

## 🧠 What is PredictionAI?

**PredictionAI** is a lightweight AI system built on top of the [NeuraFlow](https://github.com/xFufly/neuraflow) library.
It provides a simple interface to **train and run text predictions** using neural network logic for educational, experimental, or data-based applications.

This project aims to simplify AI workflows without relying on heavy frameworks like TensorFlow or PyTorch.

---

## 🚀 Features

* Neural network training powered by [NeuraFlow](https://github.com/xFufly/neuraflow)
* Simple CLI interaction using Node.js
* Easily extensible for custom datasets and logic
* Minimal dependency footprint

---

## 📦 Installation

```bash
git clone https://github.com/xFufly/predictionai.git
cd predictionai
npm install
```

---

## 🧪 Usage

### Train a model

```bash
npm run train
```

This runs the training script defined in `src/train.js`. You can customize the training logic and data inside that file.

### Run a pretrained model

```bash
npm start
```

This runs the inference using a pretrained model via `src/pretrained.js`.

---

## 💠 Scripts

| Command         | Description               |
| --------------- | ------------------------- |
| `npm run train` | Trains the neural model   |
| `npm start`     | Runs the pretrained model |

---

## 🧬 Dependencies

* [`neuraflow`](https://github.com/xFufly/neuraflow): core neural network engine
* `readline`: CLI input/output handling

---

## 🔖 Keywords

`AI`, `NeuraFlow`, `Fufly`, `Data`

---

## 📄 License

This project is licensed under the **MIT License**.

---

## ✨ Author

Made with ❤️ by **Tim DIDELOT**

Feel free to contribute, fork, or reach out with ideas and improvements!
