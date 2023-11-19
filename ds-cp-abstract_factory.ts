// Design Patterns -> Creational Patterns -> Abstract Factory
// ref https://refactoring.guru/design-patterns/abstract-factory
// Abstract Factory
interface GUIFactory {
  CreateButton(): Button;
  CreateCheckbox(): Checkbox;
}

// Concrete Factory 1
class WinFactory implements GUIFactory {
  CreateButton(): Button {
    return new WinButton();
  }

  CreateCheckbox(): Checkbox {
    return new WinCheckbox();
  }
}
// Concrete Factory 2
class MacFactory implements GUIFactory {
  CreateButton(): Button {
    return new MacButton();
  }

  CreateCheckbox(): Checkbox {
    return new MacCheckbox();
  }
}

// Abstract Product
interface Button {
  print(): string;
}

interface Checkbox {
  print(): string;
}
// Concrete Product 1
class WinButton implements Button {
  public print(): string {
    return "The WinButton of the Button Product.";
  }
}

class MacButton implements Button {
  public print(): string {
    return "The MacButton of the Button Product.";
  }
}

// Concrete Prodct 2
class WinCheckbox implements Checkbox {
  public print(): string {
    return "The WinCheckbox of the Checkbox Product.";
  }
}

class MacCheckbox implements Checkbox {
  public print(): string {
    return "The MacCheckbox of the Checkbox Product.";
  }
}

function clientCode(factory: GUIFactory) {
  const clientBtn = factory.CreateButton();
  const clientCheckbox = factory.CreateCheckbox();

  console.log(clientBtn.print());
  console.log(clientCheckbox.print());
}

clientCode(new WinFactory());
clientCode(new MacFactory());
