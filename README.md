# 📜 Template License Repository

Welcome to the official **License File Repository** of **It Is Unique Official**. This repository stores license data in **JSON format** for various **Blogger templates, themes, and tools** developed and maintained by us.

Each license file is directly connected to a specific template or project, helping to manage usage rights, authorship, and authenticity.

---

## 📂 Structure

Each `.json` file in this repository contains:

* `template`: Name of the template or product.
* `version`: Current version of the template.
* `author`: Creator/maintainer information.
* `license_type`: Type of license (e.g., Free, Personal, Premium).
* `issued_to`: Name or ID of the licensed user (if applicable).
* `issue_date`: When the license was generated.
* `validity`: License duration or expiration date (if applicable).
* `terms_url`: Link to license terms or usage conditions.

---

## ✅ Example License File

```json
{
  "template": "UniqueBloggerTheme",
  "version": "1.0.0",
  "author": "It Is Unique Official",
  "license_type": "Personal",
  "issued_to": "Jaydatt Khodave",
  "issue_date": "2025-05-16",
  "validity": "lifetime",
  "terms_url": "https://itisuniqueofficial.com/license-terms"
}
```

---

## 🔐 License Validation

Your templates can connect to this repository via URL or API to validate authenticity and ensure proper licensing.

You can fetch and parse these `.json` files dynamically to:

* Display license status in dashboards.
* Authenticate user access or unlock features.
* Protect your premium templates from unauthorized distribution.

---

## 🛠️ Usage in Templates

You can load license data in your Blogger templates using JavaScript like this:

```js
fetch("https://itisuniqueofficial.github.io/license/UniqueBloggerTheme.json")
  .then(res => res.json())
  .then(data => {
    console.log("License Issued To:", data.issued_to);
    // Further logic based on license type
  });
```

---

## 📬 Contact

For license issues, renewals, or template support, reach out via:

* 📧 Email: [itisuniqueofficial@gmail.com](mailto:itisuniqueofficial@gmail.com)
* 🌐 Website: [https://itisuniqueofficial.com/](https://itisuniqueofficial.com/)

---

> © 2025 It Is Unique Official. All rights reserved.

---

Would you like me to auto-generate `LICENSE.md` or `CONTRIBUTING.md` files too?
