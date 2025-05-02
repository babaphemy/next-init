import React from 'react';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AppData } from '@/app/data';

const Gmap = () => {
  return (
    <div className="space-y-8 mt-8">
      <Card className="overflow-hidden shadow-lg border-none">
        <CardHeader className="bg-primary/5 border-b">
          <CardTitle className="text-2xl font-bold">Visit Us</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          {/* Address Section */}
          <div className="space-y-6">
            <div className="flex items-start gap-3 group">
              <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-200">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Address</h4>
                <p className="text-muted-foreground">{AppData.address}</p>
                <Button variant="link" className="p-0 h-auto mt-2 text-primary">
                  Get Directions
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Phone Numbers Section */}
            <div className="flex items-start gap-3 group">
              <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-200">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Phone</h4>
                <div className="flex flex-wrap gap-2">
                  {AppData.phone.map((phone) => (
                    <Badge
                      key={phone}
                      variant="secondary"
                      className="px-3 py-1.5 text-sm transition-colors duration-200 hover:bg-primary hover:text-primary-foreground cursor-pointer"
                    >
                      {phone}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Email Section */}
            <div className="flex items-start gap-3 group">
              <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-200">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Email</h4>
                <div className="flex flex-wrap gap-2">
                  {AppData.adminEmail.map((email) => (
                    <Badge
                      key={email}
                      variant="outline"
                      className="px-3 py-1.5 text-sm border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors duration-200"
                    >
                      {email}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Map Card */}
      <Card className="overflow-hidden shadow-lg border-none">
        <iframe
          src={AppData.googleMap}
          className="w-full h-[400px] border-0"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Card>
    </div>
  );
};

export default Gmap;
