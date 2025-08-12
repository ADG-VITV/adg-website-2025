# ADGVIT Website – Contribution Guide

Welcome to the **ADGVIT Website Repository**. 
This guide will help you get started, make changes, and collaborate effectively.

---

## 1. Getting Access
- This repo is **private** — only approved club members can access it.
- Contact **Aman (Technical Head) in whatsapp** if you need access.
- Do **not** share the code outside the club.

---

## 2. Setting Up the Project
1. Clone the repo to your local machine:
   ```bash
   git clone https://github.com/ADG-VITV/adg-website-2025.git
   ```
2. Navigate into the folder:
   ```bash
   cd 
   ```
3. Install dependencies (if using Node.js):
   ```bash
   npm install
   ```
   

---

## 3. Making Changes
- Always create a new branch before making changes.
- Branch naming format:
  ```
  feature/short-description
  fix/short-description
  ```
  Example:
  ```
  feature/add-events-page
  fix/navbar-bug
  ```

### Steps:
1. Pull latest changes:
   ```bash
   git pull origin main
   ```
2. Create a branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your code changes.
4. Check if the site works locally

---

## 4. Committing Your Changes
1. Stage your changes:
   ```bash
   git add .
   ```
2. Commit with a clear message:
   ```bash
   git commit -m "Add events page with dynamic loading"
   ```
   - Keep messages short but descriptive.
   - Use present tense ("Add page" not "Added page").

---

## 5. Pushing Your Changes
```bash
git push origin feature/your-feature-name
```

---

## 6. Opening a Pull Request (PR)
- Go to GitHub → open your branch → click **"New Pull Request"**.
- In the PR description:
  - Explain what you changed.
  - Mention why you made the change.
  - Add screenshots if it’s a visual update.
- Assign a reviewer (Lakshya/Shatadru).

---

## 7. Review Process
- Wait for review and feedback.
- Make requested changes (push to the same branch).
- Once approved, your code will be merged into `main`.

---

## 8. General Rules
- Keep code clean and well-formatted. 
- Whatever code you are writing, make sure you are coding it for all screen sizes.
- Write comments for tricky logic. 
- Test before committing. 
- Do not commit secrets (passwords, API keys). 
- Do not push directly to `main` unless approved. 

---

## 9. Need Help?
- Ask in the adg website group chat.
- Contact the Lakshya/Shatadru for urgent issues.

---

