static String timeConversion(String s) {
    
        String time = s;

        if((s.charAt(0)=='1')&&(s.charAt(1)=='2') && (s.charAt(s.length()-2)== 'A' )){
          s=s.substring(0, s.length()-2 );
         // s=s.substring(2,(s.length()));
          s="00"+s.substring(2,(s.length()));
          System.out.println("result" + s);
          return s;
        }

        if((s.charAt(0)=='1')&&(s.charAt(1)=='2') && (s.charAt(s.length()-2)== 'P' )){
          s=s.substring(0, s.length()-2 );
          return s;
        }

        if (s.charAt(s.length()-2)== 'A' ){
            s=s.substring(0, s.length()-2 );
            return s;
        }

        if (s.charAt(s.length()-2)== 'P' ){
          int add = 12 + Integer.parseInt(s.substring(0,2));
          s=Integer.toString(add)+s.substring(2,(s.length()));
          return s.substring(0, s.length()-2 );
        }
        
        return "program cannot reach here... Input must be wrong";
    }
