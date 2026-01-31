# Playwright API Tests – JSONPlaceholder

This repository contains automated API tests for the public [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API, built using **Playwright Test** with **JavaScript**.

The main goal of this project is to practice and demonstrate API testing
concepts **as part of my QA portfolio**, focusing on quality-oriented test
design rather than tool usage only.

The tests were written from a QA perspective and include sanity checks,
happy paths, negative scenarios, and basic contract validation.

---

## 🧪 Tech Stack

- JavaScript  
- Playwright Test  
- JSONPlaceholder (public fake REST API)

---

## 🧠 Testing Approach

The tests are designed to cover:

- critical endpoints through sanity tests  
- valid request flows (happy paths)  
- invalid inputs and error handling (negative scenarios)  
- basic response schema and contract validation  

Sanity tests are tagged with `@sanity` to allow quick execution when validating
the most important endpoints.

---

## ▶️ How to Run the Tests

Install dependencies:
```bash
npm install
```

Run all tests:
```bash
npx playwright test
```

Run sanity tests only:
```bash
npx playwright test --grep @sanity
```

View HTML report:
```bash
npx playwright show-report
```


## 🚧 Project Status

This project is under active development and will be expanded with:

- additional endpoints coverage
- negative and edge case scenarios
- deeper contract validation
- improved organization and documentation

---

## 📌 Notes

JSONPlaceholder is a fake API. Some behaviors (such as POST, PUT, PATCH and DELETE)
simulate success responses without persisting data. Tests are written with this
behavior in mind.
