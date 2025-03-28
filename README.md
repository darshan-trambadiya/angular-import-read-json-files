# Import OR Read JSON Files

[![Angular Version](https://img.shields.io/badge/Angular-19.2.0-dd0031.svg?logo=angular)](https://angular.io/)

## Overview

This project demonstrates **three modern approaches to import/read local JSON files in Angular** using:

1. TypeScript module resolution
2. Angular HttpClient
3. ES Module imports with type declarations

**Key Features**:

- ✅ Standalone components architecture
- ✅ Signal-based state management
- ✅ Modern Angular template syntax
- ✅ Type-safe JSON handling
- ✅ Router-based navigation

## Prerequisites

- Angular CLI 19.2.0+
- Node.js 18.13.0+

## Getting Started

```bash
# Clone repository
git clone https://github.com/darshan-trambadiya/angular-import-read-json-files.git

# Install dependencies
npm install

# Start development server
npm start
```

## Implementation Approaches

### 1. TypeScript Module Resolution

**TypeScript 2.9>=** versions allow us to set configurations in `tsconfig.json` file for importing json file like

**Configuration** (`tsconfig.json`):

```json
{
  "compilerOptions": {
    "resolveJsonModule": true,
    "esModuleInterop": true
  }
}
```

Now you can import json file in your component like

```
import data from '../../../assets/json/data.json';

```

### 2. Angular HttpClient

Without extra typescript configurations, You can make http request to get your json file in your component/service like

**Component Implementation**:

```typescript
@Component({
  standalone: true,
  template: `{{ data() | json }}`,
})
export class SecondWayComponent {
  private http = inject(HttpClient);
  data = toSignal(this.http.get<JsonData>("assets/json/data.json"));
}
```

### 3. ES Module Imports with Type Declarations

Without extra typescript configurations, You can define it's **\*.d.ts** where your local json file stored. It's code looks like

**Type Declaration** (`src/assets/json/data-typings.d.ts`):

```typescript
declare module "*.json" {
  const value: {
    fileName: string;
    filePath: string;
    details: Array<{
      id: number;
      name: string;
      description: string;
    }>;
  };
  export default value;
}
```

Now you can import json file in your component like

```
import * as data from '../../assets/json/data.json';
// OR Import it like
// import data from '../../assets/json/data.json';

```

## Key Technologies

- Angular 19.2.0
- TypeScript 5.3
- RxJS 7.8
- Standalone Components
- Angular Signals
- ES Module Imports

## Contribution

Contributions welcome! Please follow:

1. Fork the repository
2. Create feature branch (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -am 'Add some feature'`)
4. Push to branch (`git push origin feature/improvement`)
5. Create new Pull Request
