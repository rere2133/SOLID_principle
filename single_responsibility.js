//Single Responsibility Principle (SRP) 單一職責原則
// A class should have one and only one reason to change, meaning that a class should have only one job.
import logMessage from "./logger.js";

// Example 1 by WDS
// Before
class CalorieTracker {
  constructor(maxCalories) {
    this.maxCalories = maxCalories;
    this.currentCalories = 0;
  }
  trackCalores(calorieCount) {
    this.currentCalories += calorieCount
    if (this.currentCalories > this.maxCalories) {
      this.logCalorieSurplus();
    }
  }
  logCalorieSurplus() {
    console.log('Max calories exceeded');
  }
}
const calorieTracker = new CalorieTracker(2000);
calorieTracker.trackCalores(500);
calorieTracker.trackCalores(1000);
calorieTracker.trackCalores(700);

// ------------------------------

// After
class CalorieTracker2 {
  constructor(maxCalories) {
    this.maxCalories = maxCalories;
    this.currentCalories = 0;
  }
  trackCalores(calorieCount) {
    this.currentCalories += calorieCount;
    if (this.currentCalories > this.maxCalories) {
      logMessage('Max calories exceeded')
    }
  }
}
const calorieTracker2 = new CalorieTracker2(2000);
calorieTracker2.trackCalores(500);
calorieTracker2.trackCalores(1000);
calorieTracker2.trackCalores(700);

// Example 2 by GPT
// 不符合 SRP 的例子
class User {
  constructor(name) {
    this.name = name;
  }

  saveToDatabase() {
    // 保存使用者到資料庫的邏輯
    console.log(`保存使用者 ${this.name} 到資料庫`);
  }

  sendEmail() {
    // 發送歡迎郵件的邏輯
    console.log(`發送歡迎郵件給使用者 ${this.name}`);
  }

  generateReport() {
    // 生成使用者報告的邏輯
    console.log(`生成使用者 ${this.name} 的報告`);
  }
}

// 使用 User 類別的範例
const user = new User("John Doe");
user.saveToDatabase();
user.sendEmail();
user.generateReport();

// 符合 SRP 的改進例子
class User2 {
  constructor(name) {
    this.name = name;
  }
}

class DatabaseSaver {
  save(user) {
    console.log(`保存使用者 ${user.name} 到資料庫`);
  }
}

class EmailSender {
  sendWelcomeEmail(user) {
    console.log(`發送歡迎郵件給使用者 ${user.name}`);
  }
}

class ReportGenerator {
  generate(user) {
    console.log(`生成使用者 ${user.name} 的報告`);
  }
}

// 使用改進後的類別
const user2 = new User2("John Doe BBB");

const databaseSaver = new DatabaseSaver();
databaseSaver.save(user2);

const emailSender = new EmailSender();
emailSender.sendWelcomeEmail(user2);

const reportGenerator = new ReportGenerator();
reportGenerator.generate(user2);
