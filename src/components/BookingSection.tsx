import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarIcon, Clock, MapPin, User } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const services = [
  { id: 1, name: "Signature Facial", duration: "75 min", price: 120 },
  { id: 2, name: "Hot Stone Massage", duration: "90 min", price: 150 },
  { id: 3, name: "Hair Styling & Cut", duration: "60 min", price: 85 },
  { id: 4, name: "Luxury Manicure", duration: "45 min", price: 65 },
];

const staff = [
  { id: 1, name: "Sarah Johnson", specialty: "Facial Specialist", rating: 4.9 },
  { id: 2, name: "Emma Davis", specialty: "Massage Therapist", rating: 4.8 },
  { id: 3, name: "Michael Chen", specialty: "Hair Stylist", rating: 4.7 },
  { id: 4, name: "Lisa Rodriguez", specialty: "Nail Technician", rating: 4.8 },
];

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM"
];

interface BookingSectionProps {
  isLoggedIn: boolean;
  onAuthRequired: () => void;
}

export function BookingSection({ isLoggedIn, onAuthRequired }: BookingSectionProps) {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedService, setSelectedService] = useState("");
  const [selectedStaff, setSelectedStaff] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [notes, setNotes] = useState("");

  const handleBooking = () => {
    if (!isLoggedIn) {
      onAuthRequired();
      return;
    }

    if (!selectedDate || !selectedService || !selectedStaff || !selectedTime) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields to complete your booking.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Booking Confirmed!",
      description: "Your appointment has been successfully scheduled. We'll send you a confirmation email shortly.",
    });

    // Reset form
    setSelectedDate(undefined);
    setSelectedService("");
    setSelectedStaff("");
    setSelectedTime("");
    setNotes("");
  };

  const selectedServiceData = services.find(s => s.id.toString() === selectedService);
  const selectedStaffData = staff.find(s => s.id.toString() === selectedStaff);

  return (
    <section id="booking" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Book Your Perfect Session
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your preferred service, therapist, and time. We'll take care of the rest.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Booking Form */}
            <Card className="bg-gradient-card border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-primary">
                  <CalendarIcon className="w-5 h-5" />
                  <span>Schedule Your Appointment</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Service Selection */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Select Service</label>
                  <Select value={selectedService} onValueChange={setSelectedService}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.id} value={service.id.toString()}>
                          <div className="flex justify-between items-center w-full">
                            <span>{service.name}</span>
                            <span className="text-muted-foreground ml-2">
                              {service.duration} - ${service.price}
                            </span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Staff Selection */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Choose Therapist</label>
                  <Select value={selectedStaff} onValueChange={setSelectedStaff}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a therapist" />
                    </SelectTrigger>
                    <SelectContent>
                      {staff.map((member) => (
                        <SelectItem key={member.id} value={member.id.toString()}>
                          <div className="flex justify-between items-center w-full">
                            <div>
                              <div className="font-medium">{member.name}</div>
                              <div className="text-sm text-muted-foreground">{member.specialty}</div>
                            </div>
                            <Badge variant="secondary" className="ml-2">
                              ⭐ {member.rating}
                            </Badge>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Date Selection */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Select Date</label>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => date < new Date() || date.getDay() === 0}
                    className="rounded-md border border-border"
                  />
                </div>

                {/* Time Selection */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Choose Time</label>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedTime(time)}
                        disabled={!selectedDate}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Notes */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Special Requests (Optional)</label>
                  <Textarea
                    placeholder="Any special requests or preferences..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>

                <Button variant="book" className="w-full" onClick={handleBooking}>
                  {isLoggedIn ? "Confirm Booking" : "Sign In to Book"}
                </Button>
              </CardContent>
            </Card>

            {/* Booking Summary */}
            <Card className="bg-gradient-card border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <CalendarIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Service</div>
                      <div className="text-sm text-muted-foreground">
                        {selectedServiceData ? selectedServiceData.name : "No service selected"}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Therapist</div>
                      <div className="text-sm text-muted-foreground">
                        {selectedStaffData ? selectedStaffData.name : "No therapist selected"}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <CalendarIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Date & Time</div>
                      <div className="text-sm text-muted-foreground">
                        {selectedDate && selectedTime
                          ? `${selectedDate.toLocaleDateString()} at ${selectedTime}`
                          : "No date selected"}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Duration</div>
                      <div className="text-sm text-muted-foreground">
                        {selectedServiceData ? selectedServiceData.duration : "N/A"}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Location</div>
                      <div className="text-sm text-muted-foreground">
                        Serenity Spa, Downtown
                      </div>
                    </div>
                  </div>
                </div>

                {selectedServiceData && (
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-foreground">Total</span>
                      <span className="text-2xl font-bold text-primary">
                        ${selectedServiceData.price}
                      </span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}