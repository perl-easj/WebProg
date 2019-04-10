// This interface defines a "driver", i.e. any object which includes these properties
// is considered to represent a driver.
export interface IDriver {
    driverId: string;
    permanentNumber: string;
    code: string;
    givenName: string;
    familyName: string;
    dateOfBirth: string;
    nationality: string;
}
