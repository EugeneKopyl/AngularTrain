import {
  Controller, Get, Render, Post,
  Authenticated, Required, BodyParams,
  Delete
} from "@tsed/common";

export interface Calendar{
  id: string;
  name: string;
}

@Controller("/calendars")
export class CalendarCtrl {

  @Get("/")
  @Render("calendars/index")
  async renderCalendars(): Promise<Array<Calendar>> {
    return [{id: '1', name: "test"}];
  }

  @Post("/")
  @Authenticated()
  async post(
    @Required() @BodyParams("calendar") calendar: Calendar
  ): Promise<Calendar> {
    return new Promise<Calendar>((resolve: Function, reject: Function) => {
      calendar.id = "1";
      resolve(calendar);
    });
  }

  @Delete("/")
  @Authenticated()
  async deleteItem(
    @BodyParams("calendar.id") @Required() id: string
  ): Promise<Calendar> {
    return {id, name: "calendar"};
  }
}
